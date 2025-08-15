import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { formatCurrency } from '@/lib/utils'

const sampleGigs = [
  {
    id: 1,
    title: "Desain Logo Profesional & Brand Identity Lengkap",
    seller: {
      username: "designmaster_id",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80&crop=face",
      level: "Top Rated"
    },
    rating: 4.9,
    reviews: 1247,
    price: 150000,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop&q=80",
    deliveryTime: 2,
    category: "Design",
    tags: ["logo", "branding", "identity"]
  },
  {
    id: 2, 
    title: "Website Responsive Full-Stack dengan React & Next.js",
    seller: {
      username: "webdev_pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80&crop=face",
      level: "Level 2"
    },
    rating: 5.0,
    reviews: 892,
    price: 2500000,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&q=80",
    deliveryTime: 7,
    category: "Development",
    tags: ["react", "nextjs", "fullstack"]
  },
  {
    id: 3,
    title: "Social Media Marketing Strategy & Management",
    seller: {
      username: "marketingguru",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=100&h=100&fit=crop&q=80&crop=face",
      level: "Top Rated"
    },
    rating: 4.8,
    reviews: 634,
    price: 500000,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&q=80",
    deliveryTime: 3,
    category: "Marketing",
    tags: ["social media", "marketing", "strategy"]
  },
  {
    id: 4,
    title: "Artikel SEO & Blog Post Berkualitas Tinggi",
    seller: {
      username: "content_writer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80&crop=face",
      level: "Level 2"
    },
    rating: 4.9,
    reviews: 445,
    price: 75000,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&q=80",
    deliveryTime: 1,
    category: "Writing",
    tags: ["seo", "content", "blog"]
  },
  {
    id: 5,
    title: "Video Editing & Motion Graphics Profesional",
    seller: {
      username: "video_creator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80&crop=face",
      level: "Level 1"
    },
    rating: 4.7,
    reviews: 321,
    price: 300000,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop&q=80",
    deliveryTime: 5,
    category: "Video",
    tags: ["video editing", "motion graphics", "animation"]
  },
  {
    id: 6,
    title: "UI/UX Design untuk Mobile & Web Application",
    seller: {
      username: "uxdesigner",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80&crop=face",
      level: "Top Rated"
    },
    rating: 4.9,
    reviews: 789,
    price: 800000,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop&q=80",
    deliveryTime: 4,
    category: "Design",
    tags: ["ui design", "ux design", "mobile app"]
  }
]

const categories = [
  { name: "Semua", count: "45,123" },
  { name: "Design", count: "15,234" },
  { name: "Development", count: "8,567" },
  { name: "Marketing", count: "12,890" },
  { name: "Writing", count: "6,432" },
  { name: "Video", count: "4,321" }
]

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Jelajahi Jasa Terbaik
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Temukan freelancer profesional untuk kebutuhan proyekmu
          </p>
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari jasa, freelancer, atau kata kunci..."
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          
          {/* Sidebar - Categories */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Kategori</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="flex justify-between items-center w-full text-left hover:text-blue-600 transition-colors">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Filter</h3>
                
                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rentang Harga
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waktu Pengerjaan
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Semua</option>
                    <option>1 hari</option>
                    <option>3 hari</option>
                    <option>1 minggu</option>
                    <option>2 minggu</option>
                  </select>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating Minimum
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Semua</option>
                    <option>4.5+ ⭐</option>
                    <option>4.0+ ⭐</option>
                    <option>3.5+ ⭐</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Gig Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Menampilkan <span className="font-medium">1-6</span> dari{' '}
                <span className="font-medium">45,123</span> hasil
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Paling Relevan</option>
                <option>Harga Terendah</option>
                <option>Harga Tertinggi</option>
                <option>Rating Tertinggi</option>
                <option>Terbaru</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sampleGigs.map((gig) => (
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
                    <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {gig.deliveryTime} hari
                    </div>
                  </div>
                  
                  <div className="p-5">
                    {/* Seller Info */}
                    <div className="flex items-center mb-3">
                      <img
                        src={gig.seller.avatar}
                        alt={gig.seller.username}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {gig.seller.username}
                        </p>
                        <p className="text-xs text-blue-600">
                          {gig.seller.level}
                        </p>
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
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
                        ({gig.reviews} ulasan)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {gig.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        Mulai {formatCurrency(gig.price)}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}