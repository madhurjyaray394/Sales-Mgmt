import { supabase } from '@/lib/supabase';
import { User } from '@/types';

export const UserService = {
    async getUserByEmail(email: string) {
        const { data, error } = await supabase
            .from('User')
            .select('*')
            .eq('email', email)
            .single();

        if (error) return null; // Return null if not found or error (to be safe, or check error code)
        return data as User & { password: string };
    }
};
