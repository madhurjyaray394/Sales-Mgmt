import { supabase } from '@/lib/supabase';
import { Transaction, TransactionItem } from '@/types';

export const TransactionService = {
    async getTransactions(params: {
        from?: string;
        to?: string;
        page?: number;
        pageSize?: number
    }) {
        const { from, to, page = 1, pageSize = 20 } = params;

        let query = supabase
            .from('Transaction')
            .select('*, items:TransactionItem(*, product:Product(name))', { count: 'exact' })
            .order('createdAt', { ascending: false })
            .range((page - 1) * pageSize, page * pageSize - 1);

        if (from) {
            query = query.gte('createdAt', new Date(from).toISOString());
        }
        if (to) {
            // Set to end of day
            const toDate = new Date(to);
            toDate.setHours(23, 59, 59, 999);
            query = query.lte('createdAt', toDate.toISOString());
        }

        const { data, error, count } = await query;

        if (error) throw error;

        return {
            transactions: data as (Transaction & { items: TransactionItem[] })[],
            total: count || 0,
            page,
            pageSize
        };
    },

    async createTransaction(transactionData: {
        items: { productId: string; quantity: number }[];
        paymentMethod: 'CASH' | 'UPI';
    }) {
        // Call the Postgres RPC function 'create_transaction'
        const { data, error } = await supabase
            .rpc('create_transaction', {
                items: transactionData.items,
                payment_method: transactionData.paymentMethod
            });

        if (error) throw error;
        return data;
    },

    async getTransactionById(id: string) {
        const { data, error } = await supabase
            .from('Transaction')
            .select('*, items:TransactionItem(*, product:Product(name))')
            .eq('id', id)
            .single();

        if (error) return null;
        return data as (Transaction & { items: (TransactionItem & { product: { name: string } })[] });
    },

    async getAllTransactions(params: { from?: string; to?: string }) {
        const { from, to } = params;
        let query = supabase
            .from('Transaction')
            .select('*, items:TransactionItem(*, product:Product(name))')
            .order('createdAt', { ascending: false });

        if (from) {
            query = query.gte('createdAt', new Date(from).toISOString());
        }
        if (to) {
            const toDate = new Date(to);
            toDate.setHours(23, 59, 59, 999);
            query = query.lte('createdAt', toDate.toISOString());
        }

        const { data, error } = await query;
        if (error) throw error;
        return data as (Transaction & { items: (TransactionItem & { product: { name: string } })[] })[];
    }
};
