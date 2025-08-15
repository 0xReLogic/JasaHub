# 🚀 Supabase Setup Guide untuk JasaHub

## 📋 Prerequisites
1. Akun Supabase (gratis) di [supabase.com](https://supabase.com)
2. Node.js & npm sudah terinstall

## 🛠️ Setup Steps

### 1. Create Supabase Project
1. Login ke [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Pilih organization
4. Isi project details:
   - **Name**: JasaHub
   - **Database Password**: (buat password yang kuat)
   - **Region**: Southeast Asia (Singapore)
5. Click "Create new project"
6. Tunggu 2-3 menit hingga setup selesai

### 2. Get Project Credentials
1. Go to **Settings > API**
2. Copy these values:
   - **Project URL** 
   - **anon public key**
   - **service_role key** (untuk admin operations)

### 3. Setup Environment Variables
1. Copy `.env.local.example` ke `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` dengan credentials dari step 2:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 4. Run Database Migrations
1. Go to **SQL Editor** di Supabase Dashboard
2. Copy isi dari `supabase/migrations/001_initial_schema.sql`
3. Paste dan click "Run"
4. Tunggu hingga semua tables terbuat

### 5. Seed Sample Data (Optional)
1. Copy isi dari `supabase/seed.sql`
2. Paste di SQL Editor dan run
3. Ini akan membuat sample categories

### 6. Test Authentication
1. Start dev server: `npm run dev`
2. Go to `http://localhost:3000/auth/register`
3. Buat akun test
4. Check di **Authentication > Users** di Supabase Dashboard
5. User baru harus muncul di table `profiles` juga

## 🎯 What's Included

### ✅ Database Tables
- **profiles** - User data dengan role (seller/buyer/admin)
- **categories** - Service categories & subcategories  
- **gigs** - Freelancer services/offerings
- **gig_packages** - Pricing tiers (basic/standard/premium)
- **orders** - Purchase transactions
- **reviews** - Rating & feedback system
- **messages** - Order communication
- **notifications** - System alerts

### ✅ Auth System  
- **Registration** with email verification
- **Login/Logout** functionality
- **Protected routes** & role-based access
- **Profile management** 
- **Row Level Security** (RLS) policies

### ✅ Features Ready to Build
- **Gig creation** & management
- **Order system** with status tracking
- **Real-time messaging**
- **Review & rating** system
- **Dashboard** untuk sellers & buyers
- **Admin panel** untuk management

## 🔧 Next Development Steps

1. **Create Gig Management**
   ```bash
   /dashboard/seller/gigs
   /dashboard/seller/create-gig
   ```

2. **Build User Dashboards**
   ```bash
   /dashboard/buyer
   /dashboard/seller  
   /dashboard/admin
   ```

3. **Add Real-time Features**
   - Live notifications
   - Message chat
   - Order status updates

4. **Implement Search & Filters**
   - Advanced gig search
   - Category filtering
   - Price range, ratings, etc.

## 🚨 Important Notes

- **Environment variables** harus diisi sebelum development
- **RLS policies** sudah diaktifkan untuk security
- **Email confirmation** required untuk new users
- **File uploads** (avatar, gig images) butuh Supabase Storage setup terpisah

## 🎉 Production Ready Features

- Scalable database design
- Security with RLS
- Real-time subscriptions ready
- Indonesian market optimized
- Mobile responsive UI
- SEO friendly

**Total setup time: ~15 minutes** ⚡

**Ready untuk full-stack development!** 🚀