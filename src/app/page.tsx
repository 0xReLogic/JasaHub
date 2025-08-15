import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/solid'
import { formatCurrency } from '@/lib/utils'

const featuredGigs = [
  {
    id: 1,
    title: "Desain Logo Profesional & Brand Identity",
    seller: "designmaster_id",
    rating: 4.9,
    reviews: 1247,
    price: 150000,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop&q=80",
    deliveryTime: 2,
    category: "Design"
  },
  {
    id: 2, 
    title: "Website Responsive dengan React & Next.js",
    seller: "webdev_pro",
    rating: 5.0,
    reviews: 892,
    price: 2500000,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&q=80",
    deliveryTime: 7,
    category: "Development"
  },
  {
    id: 3,
    title: "Social Media Marketing & Content Strategy",
    seller: "marketingguru",
    rating: 4.8,
    reviews: 634,
    price: 500000,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&q=80",
    deliveryTime: 3,
    category: "Marketing"
  },
  {
    id: 4,
    title: "Artikel SEO & Blog Post Berkualitas",
    seller: "content_writer",
    rating: 4.9,
    reviews: 445,
    price: 75000,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&q=80",
    deliveryTime: 1,
    category: "Writing"
  }
]

const categories = [
  { name: "Desain Grafis", icon: "🎨", count: "15,234 jasa" },
  { name: "Web Development", icon: "💻", count: "8,567 jasa" },
  { name: "Digital Marketing", icon: "📈", count: "12,890 jasa" },
  { name: "Penulisan", icon: "✍️", count: "6,432 jasa" },
  { name: "Video & Animasi", icon: "🎬", count: "4,321 jasa" },
  { name: "Musik & Audio", icon: "🎵", count: "2,876 jasa" },
  { name: "Konsultan Bisnis", icon: "💼", count: "3,654 jasa" },
  { name: "Terjemahan", icon: "🌐", count: "1,987 jasa" }
]

const stats = [
  { label: "Freelancer Aktif", value: "50,000+" },
  { label: "Project Selesai", value: "250,000+" },
  { label: "Rating Rata-rata", value: "4.9" },
  { label: "Response Time", value: "< 1 jam" }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Temukan Freelancer
              <span className="block text-yellow-400">Terbaik Indonesia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Dari desain hingga development, temukan jasa berkualitas atau mulai jual keahlianmu di platform #1 Indonesia
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Cari jasa yang kamu butuhkan..."
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 border-2 border-white/30 bg-white/95 backdrop-blur-sm placeholder-gray-500"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                  Cari Sekarang
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>100% Gratis untuk Buyer</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-green-400" />
                <span>Jaminan Uang Kembali</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-green-400" />
                <span>Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jasa Terpopuler Minggu Ini
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan freelancer terbaik dengan rating tinggi dan pengalaman terpercaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGigs.map((gig) => (
              <div key={gig.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={gig.image}
                    alt={gig.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {gig.category}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {gig.title}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-700">
                        {gig.rating}
                      </span>
                    </div>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">
                      {gig.reviews} ulasan
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(gig.price)}
                      </span>
                      <div className="text-sm text-gray-500">
                        {gig.deliveryTime} hari pengerjaan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/browse"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg inline-flex items-center transition-colors"
            >
              Jelajahi Semua Jasa
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi Kategori Populer
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jasa sesuai kebutuhan bisnis dan proyekmu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/browse/${category.name.toLowerCase().replace(/ /g, '-')}`}
                className="group p-6 bg-gray-50 hover:bg-blue-50 rounded-xl text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Freelancing-mu?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan freelancer Indonesia yang sudah meraih kesuksesan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/register"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Mulai Jual Jasa
            </Link>
            <Link 
              href="/browse"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Cari Freelancer
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}