import { supabase } from '@/lib/supabase';
import { Product } from '@/types';

export const ProductService = {
    async getProducts(params?: { search?: string }) {
        let query = supabase
            .from('Product')
            .select('*')
            .order('name', { ascending: true });

        if (params?.search) {
            query = query.ilike('name', `%${params.search}%`);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data as Product[];
    },

    async getProductById(id: string) {
        const { data, error } = await supabase
            .from('Product')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as Product;
    },

    async createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
        const { data, error } = await supabase
            .from('Product')
            .insert([product])
            .select()
            .single();

        if (error) throw error;
        return data as Product;
    },

    async updateProduct(id: string, updates: Partial<Product>) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id: _, createdAt, updatedAt, ...cleanUpdates } = updates as Product;

        // Manually update updatedAt since no trigger was set (or rely on trigger if added)
        const finalUpdates = {
            ...cleanUpdates,
            updatedAt: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('Product')
            .update(finalUpdates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Product;
    },

    async deleteProduct(id: string) {
        const { error } = await supabase
            .from('Product')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return true;
    }
};
