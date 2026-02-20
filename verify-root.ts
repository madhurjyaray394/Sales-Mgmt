import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

function loadEnv() {
    try {
        const envPath = path.resolve(__dirname, '.env.local');
        // console.log('Reading from:', envPath);
        const envFile = fs.readFileSync(envPath, 'utf8');
        const envVars: Record<string, string> = {};

        envFile.split('\n').forEach(line => {
            const match = line.match(/^([^=]+)=(.*)$/);
            if (match) {
                let value = match[2].trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.slice(1, -1);
                }
                envVars[match[1].trim()] = value;
            }
        });
        return envVars;
    } catch (e) {
        console.error('Could not read .env.local');
        console.error(e);
        return {};
    }
}

async function main() {
    const env = loadEnv();
    const url = env['NEXT_PUBLIC_SUPABASE_URL'];
    const key = env['NEXT_PUBLIC_SUPABASE_ANON_KEY'];

    if (!url || !key) {
        console.error('Missing Supabase URL or Key in .env.local');
        return;
    }

    // console.log('Connecting to Supabase...');
    const supabase = createClient(url, key);

    try {
        const { data, error } = await supabase.from('Product').select('*').limit(5);
        if (error) {
            console.error('❌ Connection failed:', error.message);
        } else {
            console.log('✅ Connection successful!');
            console.log(`Found ${data.length} products.`);
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

main();
