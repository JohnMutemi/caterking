# Database Setup Guide - Quick Start

## 🚀 Quick Setup (Choose One)

### Option A: PostgreSQL with Supabase (Easiest - Recommended)

1. **Sign up for Supabase** (free): https://supabase.com
2. **Create a new project**
3. **Get your connection string** from Settings → Database
4. **Copy `.env.local.example` to `.env.local`**
5. **Paste your connection string**:
   ```env
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require"
   ```
6. **Install Prisma**:
   ```bash
   npm install prisma @prisma/client
   ```
7. **Initialize Prisma**:
   ```bash
   npx prisma init
   ```
8. **Done!** Ready to create your schema.

---

### Option B: PostgreSQL with Neon (Alternative)

1. **Sign up for Neon** (free): https://neon.tech
2. **Create a new project**
3. **Copy connection string** from dashboard
4. **Add to `.env.local`**:
   ```env
   DATABASE_URL="postgresql://[USER]:[PASSWORD]@[ENDPOINT]/[DATABASE]?sslmode=require"
   ```
5. **Install and initialize Prisma** (same as Option A)

---

### Option C: SQLite (Quick Testing - Development Only)

1. **Copy `.env.local.example` to `.env.local`**
2. **Uncomment SQLite line**:
   ```env
   DATABASE_URL="file:./dev.db"
   ```
3. **Install Prisma**:
   ```bash
   npm install prisma @prisma/client
   ```
4. **Initialize Prisma**:
   ```bash
   npx prisma init
   ```
5. **Done!** No database server needed.

---

## 📋 Step-by-Step: Supabase Setup (Recommended)

### Step 1: Create Supabase Account
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub (easiest)

### Step 2: Create New Project
1. Click "New Project"
2. Fill in:
   - **Name**: `caterking`
   - **Database Password**: (save this!)
   - **Region**: Choose closest to Kenya
   - **Pricing Plan**: Free
3. Click "Create new project"
4. Wait 2-3 minutes for setup

### Step 3: Get Connection String
1. Go to **Settings** → **Database**
2. Scroll to **Connection string**
3. Select **URI** tab
4. Copy the connection string
5. Replace `[YOUR-PASSWORD]` with your database password

### Step 4: Setup Environment
1. Copy `.env.local.example` to `.env.local`
2. Paste your connection string:
   ```env
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.xxxxx.supabase.co:5432/postgres?sslmode=require"
   ```

### Step 5: Install Prisma
```bash
npm install prisma @prisma/client
```

### Step 6: Initialize Prisma
```bash
npx prisma init
```

This creates:
- `prisma/schema.prisma` - Your database schema
- Updates `.env` with `DATABASE_URL`

### Step 7: Test Connection
```bash
npx prisma db pull
```

If successful, you're connected! ✅

---

## 🔧 Next Steps

After database is connected:

1. **Create schema** (I can provide this)
2. **Run migration**: `npx prisma migrate dev --name init`
3. **Generate client**: `npx prisma generate`
4. **Start using**: Import `PrismaClient` in your code

---

## 🆘 Troubleshooting

### Connection Error?
- Check password is correct
- Verify connection string format
- Ensure database is running (for local PostgreSQL)
- Check firewall settings (for cloud databases)

### SSL Error?
- Add `?sslmode=require` to connection string
- For local dev, use `?sslmode=prefer`

### Can't connect to Supabase?
- Check project is active
- Verify password is correct
- Try connection pooling URL instead

---

## 📚 Resources

- **Supabase Docs**: https://supabase.com/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Neon Docs**: https://neon.tech/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs

---

## ✅ Checklist

- [ ] Chosen database option
- [ ] Created account (Supabase/Neon/etc.)
- [ ] Got connection string
- [ ] Created `.env.local` file
- [ ] Added `DATABASE_URL` to `.env.local`
- [ ] Installed Prisma
- [ ] Initialized Prisma
- [ ] Tested connection
- [ ] Ready for schema creation!

---

**Need help?** I can:
- Create the Prisma schema
- Create import script for catalogue data
- Set up database queries
- Build admin panel
