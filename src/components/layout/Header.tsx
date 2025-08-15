'use client'

import Link from 'next/link'
import { useState, Fragment } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Menu, Transition } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  BellIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, profile, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              JasaHub
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari jasa yang kamu butuhkan..."
                className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/browse" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Jelajahi Jasa
            </Link>
            
            {/* User Section */}
            {user && profile ? (
              <div className="flex items-center space-x-4">
                {/* Sell Button */}
                <Link
                  href="/dashboard/seller/create-gig"
                  className="flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium"
                >
                  <PlusIcon className="h-4 w-4" />
                  <span>Jual</span>
                </Link>

                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-gray-600">
                  <BellIcon className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Messages */}
                <Link 
                  href="/dashboard/messages" 
                  className="relative p-2 text-gray-400 hover:text-gray-600"
                >
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-blue-500 rounded-full"></span>
                </Link>

                {/* Profile Dropdown */}
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                      <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {profile.full_name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </span>
                      </div>
                      <span className="font-medium">{profile.full_name.split(' ')[0]}</span>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-900 font-medium">{profile.full_name}</p>
                        <p className="text-sm text-gray-500">{profile.email}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                          profile.role === 'seller' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {profile.role === 'seller' ? '💼 Seller' : '🛒 Buyer'}
                        </span>
                      </div>
                      
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard"
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } group flex items-center px-4 py-2 text-sm`}
                            >
                              <UserCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                              Dashboard
                            </Link>
                          )}
                        </Menu.Item>
                        
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard/profile"
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } group flex items-center px-4 py-2 text-sm`}
                            >
                              <Cog6ToothIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                              Profile Settings
                            </Link>
                          )}
                        </Menu.Item>

                        <div className="border-t border-gray-100"></div>
                        
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleSignOut}
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } group flex w-full items-center px-4 py-2 text-sm`}
                            >
                              <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                              Sign Out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/become-seller" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Jadi Penjual
                </Link>

                <button className="text-gray-700 hover:text-blue-600 p-2">
                  <HeartIcon className="h-5 w-5" />
                </button>
                
                <button className="text-gray-700 hover:text-blue-600 p-2">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                </button>

                <Link 
                  href="/auth/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Masuk
                </Link>
                
                <Link 
                  href="/auth/register"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Daftar
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Cari jasa..."
              className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/browse"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Jelajahi Jasa
            </Link>
            
            {user && profile ? (
              <>
                <div className="px-3 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {profile.full_name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{profile.full_name}</p>
                      <p className="text-sm text-gray-500">{profile.email}</p>
                    </div>
                  </div>
                </div>
                
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                
                <Link
                  href="/dashboard/messages"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pesan
                </Link>
                
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsMenuOpen(false)
                  }}
                  className="text-red-600 hover:text-red-700 block w-full text-left px-3 py-2 text-base font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/become-seller"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jadi Penjual
                </Link>
                
                <div className="border-t border-gray-200 pt-4">
                  <Link
                    href="/auth/login"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Masuk
                  </Link>
                  
                  <Link
                    href="/auth/register"
                    className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-lg text-base font-medium mx-3 mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Daftar
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}