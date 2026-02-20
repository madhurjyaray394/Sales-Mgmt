# Sales Management App

A production-ready MVP sales management system for small local businesses.

**Login:** `admin@shop.com` / `admin123`

---

## Setup Guide

### 1. Configure Environment

Copy the example env file and fill in your Supabase details:

```bash
cp .env.example .env.local
```

Open `.env.local` and set:

```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
JWT_SECRET="your-long-random-secret-string-here"
```

**Where to find your Supabase connection string:**
- Go to [supabase.com](https://supabase.com) → Your Project → **Project Settings** → **Database**
- Copy the **URI** connection string (switch to **URI** tab)
- Replace `[YOUR-PASSWORD]` with your database password

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. Push Database Schema

This creates all tables in your Supabase database:

```bash
npm run db:push
```

### 4. Seed Sample Data

```bash
npm run db:seed
```

This creates:
- Admin user: `admin@shop.com` / `admin123`
- 12 sample Indian grocery products

### 5. Run Development Server

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## Features

| Feature | Description |
|---------|-------------|
| **Billing** | Search products, build cart, Cash/UPI toggle, generate bill + PDF |
| **Dashboard** | Today's stats, 7-day bar chart, top 5 products, low stock alerts |
| **Products** | Add/Edit/Delete, stock tracking, profit margin display |
| **Sales History** | Paginated list, date filter, bill detail modal, CSV export |
| **Invoice PDF** | Thermal receipt (80mm) format, download or print |

---

## Deployment (Vercel)

```bash
npm run build
```

Then:
1. Push code to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL` → your Supabase connection string
   - `JWT_SECRET` → your secret key
4. Deploy!

---

## Project Structure

```
sales-mgmt/
├── app/
│   ├── (dashboard)/      ← Protected pages (layout with sidebar)
│   │   ├── page.tsx      ← Dashboard
│   │   ├── billing/      ← Billing screen
│   │   ├── products/     ← Product management
│   │   └── sales/        ← Sales history
│   ├── api/
│   │   ├── auth/         ← Login / Logout
│   │   ├── products/     ← Products CRUD
│   │   ├── transactions/ ← Bills, CSV export
│   │   ├── invoice/      ← PDF generation
│   │   └── dashboard/    ← Aggregation stats
│   └── login/            ← Login page
├── lib/
│   ├── prisma.ts         ← DB singleton
│   ├── auth.ts           ← JWT helpers
│   └── pdf.ts            ← Invoice PDF generator
├── prisma/
│   ├── schema.prisma     ← Database schema
│   └── seed.ts           ← Demo data
└── middleware.ts          ← JWT auth guard
```
