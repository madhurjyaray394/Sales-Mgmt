import { supabase } from '../lib/supabase';

async function main() {
    console.log('Verifying Supabase connection...');

    try {
        const { data, error } = await supabase.from('Product').select('*').limit(5);

        if (error) {
            console.error('❌ Connection failed:', error.message);
            process.exit(1);
        }

        console.log('✅ Connection successful!');
        console.log(`Found ${data.length} products.`);

        if (data.length > 0) {
            console.log('Sample product:', data[0]);
        } else {
            console.log('No products found (this is expected if DB is empty).');
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
        process.exit(1);
    }
}

main();
