export interface User {
  id: string
  email: string
  full_name: string
  username: string | null
  avatar_url: string | null
  role: 'seller' | 'buyer' | 'admin'
  created_at: string
  updated_at: string
  verified: boolean
  bio: string | null
  location: string | null
  skills: string[] | null
  rating: number | null
  total_orders: number | null
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
  parent_id: string | null
  gig_count: number | null
  created_at: string
}

export interface Gig {
  id: string
  seller_id: string
  title: string
  description: string
  category_id: string
  subcategory_id: string | null
  tags: string[]
  images: string[]
  video_url: string | null
  status: 'active' | 'paused' | 'draft' | 'rejected'
  created_at: string
  updated_at: string
  views: number
  favorites: number
  // Relations
  seller?: User
  category?: Category
  subcategory?: Category
  packages?: GigPackage[]
}

export interface GigPackage {
  id: string
  gig_id: string
  name: 'basic' | 'standard' | 'premium'
  title: string
  description: string
  price: number
  delivery_time: number
  revisions: number
  features: string[]
  is_active: boolean
  created_at: string
}

export interface Order {
  id: string
  buyer_id: string
  seller_id: string
  gig_id: string
  package_id: string
  status: 'pending' | 'in_progress' | 'delivered' | 'completed' | 'cancelled' | 'disputed'
  total_price: number
  delivery_date: string | null
  created_at: string
  updated_at: string
  // Relations
  buyer?: User
  seller?: User
  gig?: Gig
  package?: GigPackage
}

export interface Review {
  id: string
  order_id: string
  gig_id: string
  buyer_id: string
  seller_id: string
  rating: number
  comment: string | null
  images: string[]
  created_at: string
  // Relations
  buyer?: User
  seller?: User
  gig?: Gig
  order?: Order
}

export interface Message {
  id: string
  order_id: string
  sender_id: string
  recipient_id: string
  content: string
  attachments: string[]
  created_at: string
  read_at: string | null
  // Relations
  sender?: User
  recipient?: User
  order?: Order
}

export interface Notification {
  id: string
  user_id: string
  type: 'order' | 'message' | 'review' | 'system'
  title: string
  message: string
  data: Record<string, unknown>
  read: boolean
  created_at: string
}