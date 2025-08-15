'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import {
  PhotoIcon,
  VideoCameraIcon,
  PlusIcon,
  XMarkIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

interface Category {
  id: string
  name: string
  slug: string
}

interface GigPackage {
  name: 'basic' | 'standard' | 'premium'
  title: string
  description: string
  price: number
  delivery_time: number
  revisions: number
  features: string[]
}

export default function CreateGigPage() {
  const { user, profile, loading } = useAuth()
  const router = useRouter()
  
  // Form States
  const [categories, setCategories] = useState<Category[]>([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category_id: '',
    subcategory_id: '',
    tags: [] as string[],
    images: [] as string[],
    video_url: ''
  })
  const [packages, setPackages] = useState<GigPackage[]>([
    {
      name: 'basic',
      title: '',
      description: '',
      price: 0,
      delivery_time: 1,
      revisions: 1,
      features: ['']
    }
  ])
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    if (!loading && (!user || profile?.role !== 'seller')) {
      router.push('/auth/login')
    }
  }, [user, profile, loading, router])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    // Mock categories for demo
    const mockCategories = [
      { id: '1', name: 'Design Grafis', slug: 'design-grafis' },
      { id: '2', name: 'Web Development', slug: 'web-development' },
      { id: '3', name: 'Digital Marketing', slug: 'digital-marketing' },
      { id: '4', name: 'Penulisan & Konten', slug: 'penulisan-konten' },
      { id: '5', name: 'Video & Animasi', slug: 'video-animasi' },
    ]
    setCategories(mockCategories)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const updatePackage = (index: number, field: string, value: any) => {
    setPackages(prev => prev.map((pkg, i) => 
      i === index ? { ...pkg, [field]: value } : pkg
    ))
  }

  const addPackage = () => {
    if (packages.length < 3) {
      const packageTypes: ('standard' | 'premium')[] = ['standard', 'premium']
      const nextType = packageTypes[packages.length - 1]
      
      setPackages(prev => [...prev, {
        name: nextType,
        title: '',
        description: '',
        price: 0,
        delivery_time: 1,
        revisions: 1,
        features: ['']
      }])
    }
  }

  const addFeature = (packageIndex: number) => {
    setPackages(prev => prev.map((pkg, i) => 
      i === packageIndex ? { ...pkg, features: [...pkg.features, ''] } : pkg
    ))
  }

  const updateFeature = (packageIndex: number, featureIndex: number, value: string) => {
    setPackages(prev => prev.map((pkg, i) => 
      i === packageIndex 
        ? { 
            ...pkg, 
            features: pkg.features.map((feature, j) => 
              j === featureIndex ? value : feature
            ) 
          } 
        : pkg
    ))
  }

  const removeFeature = (packageIndex: number, featureIndex: number) => {
    setPackages(prev => prev.map((pkg, i) => 
      i === packageIndex 
        ? { ...pkg, features: pkg.features.filter((_, j) => j !== featureIndex) } 
        : pkg
    ))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In real app, would save to Supabase
    console.log('Gig data:', { formData, packages })
    
    alert('🎉 Gig berhasil dibuat! Redirecting ke dashboard...')
    router.push('/dashboard')
    
    setIsSubmitting(false)
  }

  const steps = [
    { id: 1, name: 'Informasi Dasar', status: currentStep >= 1 ? 'complete' : 'upcoming' },
    { id: 2, name: 'Paket & Harga', status: currentStep >= 2 ? 'complete' : 'upcoming' },
    { id: 3, name: 'Media & Publikasi', status: currentStep >= 3 ? 'complete' : 'upcoming' },
  ]

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Buat Gig Baru</h1>
          <p className="text-gray-600 mt-2">Buat penawaran jasa yang menarik untuk pelanggan</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {step.id}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`mx-4 w-16 h-0.5 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Informasi Dasar Gig</h2>
              
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Gig *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Contoh: Saya akan membuat logo profesional untuk bisnis Anda"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={80}
                />
                <p className="text-sm text-gray-500 mt-1">{formData.title.length}/80 karakter</p>
              </div>

              {/* Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori *
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => handleInputChange('category_id', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih Kategori</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sub-kategori
                  </label>
                  <select
                    value={formData.subcategory_id}
                    onChange={(e) => handleInputChange('subcategory_id', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={!formData.category_id}
                  >
                    <option value="">Pilih Sub-kategori</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Gig *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Jelaskan detail jasa yang Anda tawarkan..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={6}
                  maxLength={1200}
                />
                <p className="text-sm text-gray-500 mt-1">{formData.description.length}/1200 karakter</p>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (Kata Kunci)
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    placeholder="Tambah tag..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={addTag}
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.title || !formData.description || !formData.category_id}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Lanjut ke Paket & Harga
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Paket & Harga</h2>
                {packages.length < 3 && (
                  <button
                    onClick={addPackage}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <PlusIcon className="h-5 w-5" />
                    <span>Tambah Paket</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold capitalize text-gray-900">
                        {pkg.name}
                        {pkg.name === 'basic' && ' 🥉'}
                        {pkg.name === 'standard' && ' 🥈'}
                        {pkg.name === 'premium' && ' 🥇'}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nama Paket
                        </label>
                        <input
                          type="text"
                          value={pkg.title}
                          onChange={(e) => updatePackage(index, 'title', e.target.value)}
                          placeholder="Logo Sederhana"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Deskripsi
                        </label>
                        <textarea
                          value={pkg.description}
                          onChange={(e) => updatePackage(index, 'description', e.target.value)}
                          placeholder="1 konsep logo, 3 revisi"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          rows={3}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Harga (Rp)
                          </label>
                          <input
                            type="number"
                            value={pkg.price}
                            onChange={(e) => updatePackage(index, 'price', parseInt(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Waktu (hari)
                          </label>
                          <input
                            type="number"
                            value={pkg.delivery_time}
                            onChange={(e) => updatePackage(index, 'delivery_time', parseInt(e.target.value) || 1)}
                            min="1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Jumlah Revisi
                        </label>
                        <input
                          type="number"
                          value={pkg.revisions}
                          onChange={(e) => updatePackage(index, 'revisions', parseInt(e.target.value) || 1)}
                          min="1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fitur yang Disertakan
                        </label>
                        <div className="space-y-2">
                          {pkg.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex">
                              <input
                                type="text"
                                value={feature}
                                onChange={(e) => updateFeature(index, featureIndex, e.target.value)}
                                placeholder="Contoh: File PNG & JPG"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                              <button
                                onClick={() => removeFeature(index, featureIndex)}
                                className="px-3 py-2 bg-red-100 text-red-600 rounded-r-md hover:bg-red-200"
                                disabled={pkg.features.length <= 1}
                              >
                                <XMarkIcon className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => addFeature(index)}
                            className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-600"
                          >
                            + Tambah Fitur
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Kembali
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={packages.some(pkg => !pkg.title || !pkg.description || pkg.price <= 0)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Lanjut ke Media
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Media & Publikasi</h2>
              
              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gambar Gig (Maks. 5)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Upload gambar yang menunjukkan hasil kerja Anda
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Pilih Gambar
                    </button>
                  </div>
                </div>
              </div>

              {/* Video */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video (Opsional)
                </label>
                <input
                  type="url"
                  value={formData.video_url}
                  onChange={(e) => handleInputChange('video_url', e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                  <div className="flex">
                    <InformationCircleIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="ml-2">
                      <p className="text-sm text-blue-800">
                        <strong>Tips:</strong> Gig dengan video mendapat 40% lebih banyak pesanan!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Review & Publikasi</h3>
                <p className="text-gray-600 mb-4">
                  Setelah dipublikasi, gig Anda akan direview oleh tim kami dan akan aktif dalam 24 jam.
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white inline-block mr-2"></div>
                        Menyimpan...
                      </>
                    ) : (
                      '🚀 Publikasi Gig'
                    )}
                  </button>
                </div>
              </div>

              {/* Navigation */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}