'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon,
  EyeIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function DashboardPage() {
  const { user, profile, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user || !profile) {
    return null
  }

  const isSeller = profile.role === 'seller'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Halo, {profile.full_name}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            {isSeller ? 'Kelola bisnis jasa Anda dengan mudah' : 'Temukan jasa terbaik untuk kebutuhan Anda'}
          </p>
        </div>

        {/* Role Toggle */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Mode Dashboard</h3>
            <div className="flex space-x-4">
              <Link
                href="/dashboard?role=buyer"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  !isSeller || profile.role === 'buyer'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🛒 Buyer Dashboard
              </Link>
              <Link
                href="/dashboard?role=seller"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isSeller || profile.role === 'seller'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                💼 Seller Dashboard
              </Link>
            </div>
          </div>
        </div>

        {isSeller ? (
          <SellerDashboard profile={profile} />
        ) : (
          <BuyerDashboard profile={profile} />
        )}
      </div>
    </div>
  )
}

function SellerDashboard({ profile }: { profile: { full_name: string; email: string; role: string } }) {
  const stats = [
    {
      name: 'Total Penjualan',
      value: 'Rp 12.5 juta',
      change: '+12%',
      icon: CurrencyDollarIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Pesanan Aktif',
      value: '8',
      change: '+3',
      icon: ShoppingBagIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Total Reviews',
      value: '124',
      change: '+8',
      icon: StarIcon,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Response Rate',
      value: '98%',
      change: '+2%',
      icon: ChatBubbleLeftRightIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className={`flex-shrink-0 ${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href="/dashboard/seller/create-gig"
              className="flex items-center p-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 mr-3" />
              <span className="text-gray-600 group-hover:text-blue-600 font-medium">
                Buat Gig Baru
              </span>
            </Link>
            <Link
              href="/dashboard/seller/gigs"
              className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <EyeIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-gray-700 font-medium">Kelola Gig</span>
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-gray-700 font-medium">Pesan Masuk</span>
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </Link>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg p-6 shadow-sm border lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Pesanan Terbaru</h3>
            <Link href="/dashboard/orders" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">J{order}</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Logo Design Premium Package</p>
                    <p className="text-sm text-gray-500">by buyer_user_{order}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Rp 750.000</p>
                  <p className="text-sm text-green-600">In Progress</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BuyerDashboard({ profile }: { profile: { full_name: string; email: string; role: string } }) {
  const stats = [
    {
      name: 'Total Pesanan',
      value: '23',
      change: '+5',
      icon: ShoppingBagIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Sedang Berjalan',
      value: '3',
      change: '+1',
      icon: ChartBarIcon,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Selesai',
      value: '18',
      change: '+4',
      icon: UserGroupIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Favorit',
      value: '12',
      change: '+2',
      icon: HeartIcon,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className={`flex-shrink-0 ${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href="/browse"
              className="flex items-center p-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 mr-3" />
              <span className="text-gray-600 group-hover:text-blue-600 font-medium">
                Cari Jasa
              </span>
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <EyeIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-gray-700 font-medium">Pesanan Saya</span>
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-gray-700 font-medium">Pesan</span>
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
            </Link>
          </div>
        </div>

        {/* Active Orders */}
        <div className="bg-white rounded-lg p-6 shadow-sm border lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Pesanan Aktif</h3>
            <Link href="/dashboard/orders" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-medium">S{order}</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Website Landing Page</p>
                    <p className="text-sm text-gray-500">by webdev_master</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Rp 2.500.000</p>
                  <p className="text-sm text-blue-600">2 hari lagi</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}