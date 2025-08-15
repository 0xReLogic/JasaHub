import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for better TypeScript support
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
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
        Insert: {
          id: string
          email: string
          full_name: string
          username?: string | null
          avatar_url?: string | null
          role?: 'seller' | 'buyer' | 'admin'
          created_at?: string
          updated_at?: string
          verified?: boolean
          bio?: string | null
          location?: string | null
          skills?: string[] | null
          rating?: number | null
          total_orders?: number | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          username?: string | null
          avatar_url?: string | null
          role?: 'seller' | 'buyer' | 'admin'
          created_at?: string
          updated_at?: string
          verified?: boolean
          bio?: string | null
          location?: string | null
          skills?: string[] | null
          rating?: number | null
          total_orders?: number | null
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          parent_id: string | null
          gig_count: number | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          icon?: string | null
          parent_id?: string | null
          gig_count?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          icon?: string | null
          parent_id?: string | null
          gig_count?: number | null
          created_at?: string
        }
      }
      gigs: {
        Row: {
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
        }
        Insert: {
          id?: string
          seller_id: string
          title: string
          description: string
          category_id: string
          subcategory_id?: string | null
          tags?: string[]
          images?: string[]
          video_url?: string | null
          status?: 'active' | 'paused' | 'draft' | 'rejected'
          created_at?: string
          updated_at?: string
          views?: number
          favorites?: number
        }
        Update: {
          id?: string
          seller_id?: string
          title?: string
          description?: string
          category_id?: string
          subcategory_id?: string | null
          tags?: string[]
          images?: string[]
          video_url?: string | null
          status?: 'active' | 'paused' | 'draft' | 'rejected'
          created_at?: string
          updated_at?: string
          views?: number
          favorites?: number
        }
      }
    }
  }
}