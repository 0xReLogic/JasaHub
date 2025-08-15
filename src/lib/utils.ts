import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency to Indonesian Rupiah
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Format number with K, M notation
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Format relative time (e.g., "2 hari yang lalu")
export function formatRelativeTime(date: string | Date): string {
  const now = new Date()
  const target = new Date(date)
  const diffInSeconds = Math.floor((now.getTime() - target.getTime()) / 1000)

  const units = [
    { name: 'tahun', seconds: 31536000 },
    { name: 'bulan', seconds: 2592000 },
    { name: 'minggu', seconds: 604800 },
    { name: 'hari', seconds: 86400 },
    { name: 'jam', seconds: 3600 },
    { name: 'menit', seconds: 60 },
    { name: 'detik', seconds: 1 },
  ]

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds)
    if (interval >= 1) {
      return `${interval} ${unit.name} yang lalu`
    }
  }

  return 'Baru saja'
}

// Generate slug from string
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .trim()
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// Calculate delivery date
export function calculateDeliveryDate(days: number): Date {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date
}

// Format delivery time
export function formatDeliveryTime(days: number): string {
  if (days === 1) return '1 hari'
  if (days < 7) return `${days} hari`
  if (days === 7) return '1 minggu'
  if (days < 30) return `${Math.floor(days / 7)} minggu`
  if (days === 30) return '1 bulan'
  return `${Math.floor(days / 30)} bulan`
}

// Generate star rating display
export function generateStarRating(rating: number): string {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return '★'.repeat(fullStars) + 
         (hasHalfStar ? '☆' : '') + 
         '☆'.repeat(emptyStars)
}

// Validate Indonesian phone number
export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/
  return phoneRegex.test(phone.replace(/\s|-/g, ''))
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('62')) {
    return `+${cleaned}`
  }
  if (cleaned.startsWith('0')) {
    return `+62${cleaned.slice(1)}`
  }
  return phone
}

// Generate random color for avatar
export function generateAvatarColor(text: string): string {
  const colors = [
    'bg-red-500',
    'bg-blue-500', 
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500'
  ]
  
  const hash = text.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  
  return colors[Math.abs(hash) % colors.length]
}

// Extract initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

// Debounce function
export function debounce<T extends (...args: never[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Check if file is image
export function isImageFile(file: File): boolean {
  return file.type.startsWith('image/')
}

// Check if file is video
export function isVideoFile(file: File): boolean {
  return file.type.startsWith('video/')
}

// Format file size
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`
}

// Generate random ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}