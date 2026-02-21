import uuid, random, datetime, json

products = [
    {'name': 'India Gate Basmati Rice 1kg', 'sp': 180.0, 'cp': 150.0},
    {'name': 'Tata Sampann Toor Dal 1kg', 'sp': 140.0, 'cp': 115.0},
    {'name': 'Fortune Sunflower Oil 1L', 'sp': 135.0, 'cp': 120.0},
    {'name': 'Amul Taaza Milk 500ml', 'sp': 28.0, 'cp': 25.0},
    {'name': 'Britannia Daily Bread 400g', 'sp': 45.0, 'cp': 35.0},
    {'name': 'Taj Mahal Tea 250g', 'sp': 160.0, 'cp': 135.0},
    {'name': 'Madhur Pure Sugar 1kg', 'sp': 55.0, 'cp': 45.0},
    {'name': 'Tata Salt 1kg', 'sp': 25.0, 'cp': 20.0},
    {'name': 'Parle-G Gold Biscuits 1kg', 'sp': 90.0, 'cp': 75.0},
    {'name': 'Dettol Original Soap 125g', 'sp': 50.0, 'cp': 40.0},
    {'name': 'Maggi 2-Minute Noodles 140g', 'sp': 30.0, 'cp': 25.0},
    {'name': 'Aashirvaad Atta 5kg', 'sp': 240.0, 'cp': 210.0}
]

out_products = []
now_time = datetime.datetime.now()

for p in products:
    now = now_time.isoformat() + 'Z'
    out_products.append({
        'id': str(uuid.uuid4()),
        'name': p['name'],
        'sellingPrice': p['sp'],
        'costPrice': p['cp'],
        'stockQuantity': random.randint(50, 200),
        'trackStock': True,
        'createdAt': now,
        'updatedAt': now
    })

out_transactions = []
for day in range(7):
    is_festival = (day == 2)
    num_tx = random.randint(2, 5)
    if is_festival:
        num_tx += 3
        
    date_val = now_time - datetime.timedelta(days=day)
    
    for _ in range(num_tx):
        tx_id = str(uuid.uuid4())
        tx_time = date_val.replace(hour=random.randint(8, 20), minute=random.randint(0, 59), second=random.randint(0, 59))
        
        num_items = random.randint(1, 4)
        is_spike_tx = False
        
        if is_festival and random.random() < 0.5:
            num_items = random.randint(6, 12)
            is_spike_tx = True
            
        chosen_products = random.sample(out_products, min(num_items, len(out_products)))
        tx_total = 0.0
        
        items = []
        for p in chosen_products:
            item_id = str(uuid.uuid4())
            qty = random.randint(1, 3)
            
            if is_spike_tx:
                qty = random.randint(3, 8)
                
            total = qty * p['sellingPrice']
            tx_total += total
            
            p['stockQuantity'] -= qty 
            
            items.append({
                'productId': p['id'],
                'quantity': qty,
                'priceAtSale': p['sellingPrice'],
                'total': total,
                'product': {
                    'name': p['name'],
                    'costPrice': p['costPrice'],
                    'sellingPrice': p['sellingPrice']
                }
            })
            
        out_transactions.append({
            'id': tx_id,
            'totalAmount': tx_total,
            'paymentMethod': random.choice(['CASH', 'UPI', 'UPI', 'UPI']),
            'createdAt': tx_time.isoformat() + 'Z',
            'items': items
        })

output = f"""import {{ Product, Transaction }} from "./types";

export const MOCK_PRODUCTS: Product[] = {json.dumps(out_products, indent=4)};

export const MOCK_TRANSACTIONS = {json.dumps(out_transactions, indent=4)} as Transaction[];
"""

with open('lib/data/mockData.ts', 'w') as f:
    f.write(output)
print('Done generating lib/data/mockData.ts')
