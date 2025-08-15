# JasaHub - Indonesian Freelance Marketplace

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green?logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com/)

**JasaHub** adalah platform freelance marketplace yang dikhususkan untuk pasar Indonesia, menghubungkan freelancer lokal dengan klien yang membutuhkan jasa profesional.

![JasaHub Preview](https://0xrelogic.my.id/)

## KEY FEATURES

### Full-Stack Architecture
- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Real-time)
- **Authentication:** JWT-based dengan email verification
- **Database:** 9 tables dengan Row Level Security (RLS)
- **Real-time:** Live messaging & notifications

### Core Functionalities
- **User Authentication** (Register/Login/Logout)
- **Role-based Access** (Seller/Buyer/Admin)
- **Dashboard System** (Seller & Buyer dashboards)
- **Gig Creation** (Multi-step wizard dengan packages)
- **Real-time Chat** (Live messaging system)
- **Browse & Search** (Advanced filtering)
- **Responsive Design** (Mobile-first approach)
- **Payment Integration** (Secure transaction processing)
- **Order Management** (Complete workflow from order to delivery)
- **Review & Rating System** (Community feedback mechanism)

### Database Schema
```sql
- profiles      (User data & roles)
- categories    (Service categories) 
- gigs          (Freelancer services)
- gig_packages  (Pricing tiers: Basic/Standard/Premium)
- orders        (Transaction management)
- reviews       (Rating & feedback system)
- messages      (Real-time communication)
- notifications (System alerts)
- order_requirements (Custom requirements)
```

## GETTING STARTED

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Supabase account (free tier available)

### 1. Clone & Install
```bash
git clone https://github.com/0xReLogic/JasaHub.git
cd JasaHub/jasahub
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp .env.local.example .env.local

# Edit with your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Database Setup
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create new project
3. Run SQL from `supabase/migrations/001_initial_schema.sql`
4. Run seed data from `supabase/seed.sql`

### 4. Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

## PAGES & FEATURES

### Public Pages
- **Landing Page** (`/`) - Hero section, categories, featured gigs
- **Browse Gigs** (`/browse`) - Search & filter services
- **Gig Details** (`/gig/[id]`) - Service details & packages (Planned)

### Authentication
- **Register** (`/auth/register`) - Email verification system
- **Login** (`/auth/login`) - JWT session management
- **Logout** - Secure session termination

### Dashboard System
- **Main Dashboard** (`/dashboard`) - Role-based overview
- **Seller Dashboard** - Gig management, orders, earnings
- **Buyer Dashboard** - Order history, favorites, reviews
- **Profile Settings** (`/dashboard/profile`) - Account management

### Communication
- **Messages** (`/dashboard/messages`) - Real-time chat system
- **Notifications** - System alerts & updates

### Seller Features
- **Create Gig** (`/dashboard/create-gig`) - Multi-step wizard
- **Manage Gigs** (`/dashboard/gigs`) - Edit, view analytics
- **Order Management** - Status tracking, delivery
- **Earnings Overview** - Revenue and performance metrics

## UI/UX HIGHLIGHTS

### Modern Design
- **Glassmorphism** effects on hero section
- **Gradient backgrounds** dengan Indonesian color palette
- **Professional card** layouts untuk gig listings
- **Responsive grid** system untuk semua screen sizes

### Interactive Components
- **Search functionality** with category filtering
- **Multi-step forms** with progress indicators
- **Real-time chat** interface system
- **Dropdown menus** with smooth animations
- **Professional image galleries** from Unsplash integration

### Mobile Experience
- **Touch-friendly** navigation
- **Optimized layouts** untuk mobile screens
- **Fast loading** dengan image optimization
- **PWA-ready** architecture

## DATABASE DESIGN

### Security Features
- **Row Level Security (RLS)** pada semua tables
- **JWT-based** authentication
- **Role-based** access control
- **Input sanitization** & validation

### Performance Optimizations
- **Database indexing** untuk fast queries
- **Real-time subscriptions** untuk live features
- **Optimistic updates** untuk better UX
- **Caching strategies** untuk static data

## DEPLOYMENT

### Vercel Deployment
```bash
# Connect to Vercel
npm install -g vercel
vercel

# Environment variables will be prompted
# Add your Supabase credentials
```

### Production Configuration
- **Domain setup** dengan custom domain
- **SSL certificates** automatic via Vercel
- **CDN optimization** untuk global performance
- **Analytics integration** ready

## DEVELOPMENT

### Tech Stack
```json
{
  "frontend": "Next.js 15 + TypeScript + Tailwind CSS",
  "backend": "Supabase (PostgreSQL + Auth + Storage)",
  "ui": "HeadlessUI + Heroicons",
  "validation": "Built-in form validation",
  "deployment": "Vercel + Supabase"
}
```

### Code Structure
```
src/
├── app/                 # Next.js 15 App Router
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Protected dashboard pages  
│   ├── browse/         # Public browsing pages
│   └── api/            # API routes
├── components/         # Reusable UI components
├── contexts/           # React contexts (Auth, etc.)
├── lib/                # Utilities & configurations
├── types/              # TypeScript type definitions
└── styles/             # Global styles & Tailwind
```

### Quality Assurance
- **TypeScript** untuk type safety
- **ESLint** configuration
- **Responsive design** testing
- **Cross-browser** compatibility

## BUSINESS MODEL

### Revenue Streams
- **Commission fees** dari setiap transaksi (5-10%)
- **Premium memberships** untuk sellers
- **Featured listings** untuk better visibility
- **Advertising revenue** dari promoted gigs

### Market Opportunity
- **Target Market:** Indonesian freelancers & SMEs
- **Market Size:** $2B+ Indonesian digital services market
- **Growth Potential:** 25%+ YoY dalam digital economy
- **Competitive Edge:** Fokus pada bahasa & budaya Indonesia

## CONTRIBUTING

### Development Workflow
1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Bug Reports
- Use GitHub Issues untuk bug reports
- Include screenshots & reproduction steps
- Mention browser & OS information

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## CONTACT

**Developer:** AllenElzayn  
**Email:** hi@allenarch.dev  
**GitHub:** [@0xReLogic](https://github.com/0xReLogic)  
**Project:** [JasaHub Repository](https://github.com/0xReLogic/JasaHub)  
**Website:** [AllenArch.dev](https://allenarch.dev)

---

## LIVE DEMO

**Demo:**   0xReLogic.my.id
**Desktop:** Works well across different browsers & operating systems 
**Mobile:** Responsive design works on all devices  
**Performance:** Lighthouse Mobile 95, Desktop 100  
**Documentation:** Available in repository 

---

**Made with love for Indonesian Digital Economy**

*JasaHub - Connecting Indonesian Talent with Global Opportunities*

## ROADMAP

### Fase 1 (Selesai)
- Fungsionalitas marketplace inti
- Sistem autentikasi dan profil pengguna
- Sistem pesan real-time
- Dashboard untuk seller dan buyer
- Pembuatan dan pengelolaan gig
- Fitur browse dan pencarian
- Desain UI/UX profesional

### Fase 2 (Sprint Berikutnya)
- Integrasi pembayaran real (Stripe/Midtrans)
- Sistem upload file untuk portofolio
- Filter pencarian lanjutan
- Optimasi aplikasi mobile
- Notifikasi email

### Fase 3 (Masa Depan)
- Rekomendasi gig berbasis AI
- Booking konsultasi video
- Dashboard analytics lanjutan
- Dukungan multi-bahasa
- Aplikasi mobile

### Fase 4 (Jangka Panjang)
- Solusi enterprise
- Ekspansi internasional
- Ekosistem partnership
- Fitur AI lanjutan

---

## CONTRIBUTORS

Thanks to all contributors who have helped make JasaHub better!

<!-- Contributors will be automatically generated -->

---
