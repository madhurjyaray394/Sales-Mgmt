import uuid, random, datetime

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

for p in products:
    p['id'] = str(uuid.uuid4())
    p['stock'] = random.randint(50, 200)

now = datetime.datetime.now()

transactions = []
transaction_items = []
tx_counts = []

for day in range(7):
    # day 0 is today, day 6 is 6 days ago.
    # 2 days ago is festival day spike
    is_festival = (day == 2)
    
    num_tx = random.randint(2, 4)
    if is_festival:
        num_tx += 3
        
    date_val = now - datetime.timedelta(days=day)
    
    for _ in range(num_tx):
        tx_id = str(uuid.uuid4())
        
        # choose a random time on that day (between 8 AM and 9 PM)
        tx_time = date_val.replace(hour=random.randint(8, 20), minute=random.randint(0, 59))
        
        num_items = random.randint(1, 4)
        is_spike_tx = False
        
        if is_festival and random.random() < 0.5:
            # 50% chance this transaction is huge
            num_items = random.randint(6, 12)
            is_spike_tx = True
            
        chosen_products = random.sample(products, min(num_items, len(products)))
        
        tx_total = 0.0
        
        for p in chosen_products:
            item_id = str(uuid.uuid4())
            qty = random.randint(1, 3)
            
            if is_spike_tx:
                qty = random.randint(3, 8)
                
            total = qty * p['sp']
            tx_total += total
            
            p['stock'] -= qty # update stock
            
            transaction_items.append({
                'id': item_id,
                'transactionId': tx_id,
                'productId': p['id'],
                'quantity': qty,
                'priceAtSale': p['sp'],
                'total': total
            })
            
        transactions.append({
            'id': tx_id,
            'totalAmount': tx_total,
            'paymentMethod': random.choice(['CASH', 'UPI', 'UPI', 'UPI']), # Slightly more UPI than cash
            'createdAt': tx_time.strftime('%Y-%m-%d %H:%M:%S+00')
        })

sql = []

sql.append('-- Insert Products')
sql.append('INSERT INTO "Product" (id, name, "sellingPrice", "costPrice", "stockQuantity", "trackStock") VALUES')
prod_vals = []
for p in products:
    prod_vals.append(f"  ('{p['id']}', '{p['name']}', {p['sp']}, {p['cp']}, {p['stock']}, true)")
sql.append(',\n'.join(prod_vals) + ';')
sql.append('')

sql.append('-- Insert Transactions')
sql.append('INSERT INTO "Transaction" (id, "totalAmount", "paymentMethod", "createdAt") VALUES')
tx_vals = []
for t in transactions:
    tx_vals.append(f"  ('{t['id']}', {t['totalAmount']}, '{t['paymentMethod']}', '{t['createdAt']}')")
sql.append(',\n'.join(tx_vals) + ';')
sql.append('')

sql.append('-- Insert Transaction Items')
sql.append('INSERT INTO "TransactionItem" (id, "transactionId", "productId", quantity, "priceAtSale", total) VALUES')
ti_vals = []
for ti in transaction_items:
    ti_vals.append(f"  ('{ti['id']}', '{ti['transactionId']}', '{ti['productId']}', {ti['quantity']}, {ti['priceAtSale']}, {ti['total']})")
sql.append(',\n'.join(ti_vals) + ';')

with open('mock_data.sql', 'w') as f:
    f.write('\n'.join(sql))
