# Quick Start - Environment Variables

## 🚀 Ready-to-Use .env File

Copy the content below to create your `.env.local` file:

---

## For PostgreSQL (Supabase) - RECOMMENDED

```env
# Database - Get from Supabase (https://supabase.com)
# Settings → Database → Connection string (URI)
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?sslmode=require"

# Application
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Steps:**
1. Sign up at https://supabase.com (free)
2. Create new project
3. Go to Settings → Database
4. Copy connection string
5. Replace `[YOUR-PASSWORD]` with your database password
6. Save as `.env.local`

---

## For SQLite (Quick Testing)

```env
# Database - SQLite (no setup needed)
DATABASE_URL="file:./dev.db"

# Application
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Steps:**
1. Create `.env.local` file
2. Paste above content
3. Done! No database server needed

---

## For PostgreSQL (Neon)

```env
# Database - Get from Neon (https://neon.tech)
DATABASE_URL="postgresql://[USER]:[PASSWORD]@[ENDPOINT]/[DATABASE]?sslmode=require"

# Application
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Steps:**
1. Sign up at https://neon.tech (free)
2. Create new project
3. Copy connection string from dashboard
4. Save as `.env.local`

---

## For MongoDB (Alternative)

```env
# Database - Get from MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
MONGODB_URI="mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/caterking?retryWrites=true&w=majority"

# Application
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## Create .env.local File

**Windows (PowerShell):**
```powershell
Copy-Item env.example .env.local
```

**Mac/Linux:**
```bash
cp env.example .env.local
```

**Or manually:**
1. Create new file named `.env.local` in project root
2. Copy content from `env.example`
3. Fill in your database connection string

---

## Next Steps

After creating `.env.local`:

1. **Install Prisma** (for PostgreSQL/SQLite):
   ```bash
   npm install prisma @prisma/client
   ```

2. **Initialize Prisma**:
   ```bash
   npx prisma init
   ```

3. **Test connection**:
   ```bash
   npx prisma db pull
   ```

4. **Ready!** Now we can create the schema.

---

## Which Database Should I Choose?

### 🏆 **PostgreSQL (Supabase)** - Best Choice
- ✅ Free tier (500MB)
- ✅ Production-ready
- ✅ Easy setup
- ✅ Great for structured data
- ✅ Perfect for 200+ products

### ⚡ **SQLite** - Quick Start
- ✅ Zero setup
- ✅ Perfect for development
- ❌ Not for production
- ✅ Good for testing

### 📦 **MongoDB** - Flexible
- ✅ Free tier available
- ✅ Flexible schema
- ✅ Good for varying data
- ⚠️ Less structured

**My Recommendation:** Start with **Supabase (PostgreSQL)** - it's free, easy, and production-ready!
