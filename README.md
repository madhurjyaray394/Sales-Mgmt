# Sales Management App

A production-ready MVP sales management system for small local businesses.


| Feature | Description |
|---------|-------------|
| **Billing** | Search products, build cart, Cash/UPI toggle, generate bill + PDF |
| **Dashboard** | Today's stats, 7-day bar chart, top 5 products, low stock alerts |
| **Products** | Add/Edit/Delete, stock tracking, profit margin display |
| **Sales History** | Paginated list, date filter, bill detail modal, CSV export |
| **Invoice PDF** | Thermal receipt (80mm) format, download or print |


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
