'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  FaceSmileIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'

interface Message {
  id: string
  content: string
  sender_id: string
  recipient_id: string
  created_at: string
  read_at: string | null
  sender?: {
    full_name: string
    avatar_url: string | null
  }
}

interface Conversation {
  id: string
  other_user: {
    id: string
    full_name: string
    avatar_url: string | null
    username: string | null
  }
  last_message: {
    content: string
    created_at: string
    sender_id: string
  }
  unread_count: number
}

export default function MessagesPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loadingMessages, setLoadingMessages] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      fetchConversations()
    }
  }, [user])

  useEffect(() => {
    if (selectedConversation && user) {
      fetchMessages(selectedConversation)
      
      // Subscribe to real-time messages
      const subscription = supabase
        .channel('messages')
        .on('postgres_changes', 
          { 
            event: 'INSERT', 
            schema: 'public', 
            table: 'messages',
            filter: `order_id=eq.${selectedConversation}`
          }, 
          (payload) => {
            const newMessage = payload.new as Message
            setMessages(prev => [...prev, newMessage])
            scrollToBottom()
          }
        )
        .subscribe()

      return () => {
        subscription.unsubscribe()
      }
    }
  }, [selectedConversation, user])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const fetchConversations = async () => {
    // Mock data for demo - would fetch real conversations from orders/messages
    const mockConversations: Conversation[] = [
      {
        id: '1',
        other_user: {
          id: '2',
          full_name: 'Design Master',
          avatar_url: null,
          username: 'designmaster_id'
        },
        last_message: {
          content: 'Halo, saya sudah selesai dengan desain logonya. Silakan dicek!',
          created_at: '2025-01-15T10:30:00Z',
          sender_id: '2'
        },
        unread_count: 2
      },
      {
        id: '2',
        other_user: {
          id: '3',
          full_name: 'Web Developer Pro',
          avatar_url: null,
          username: 'webdev_pro'
        },
        last_message: {
          content: 'Baik, saya akan mulai mengerjakan website-nya hari ini.',
          created_at: '2025-01-15T09:15:00Z',
          sender_id: '3'
        },
        unread_count: 0
      },
      {
        id: '3',
        other_user: {
          id: '4',
          full_name: 'Content Writer',
          avatar_url: null,
          username: 'content_writer'
        },
        last_message: {
          content: 'Artikel sudah saya kirim. Mohon direview ya!',
          created_at: '2025-01-14T16:45:00Z',
          sender_id: '4'
        },
        unread_count: 1
      }
    ]
    
    setConversations(mockConversations)
  }

  const fetchMessages = async (conversationId: string) => {
    setLoadingMessages(true)
    
    // Mock messages for demo
    const mockMessages: Message[] = [
      {
        id: '1',
        content: 'Halo! Saya tertarik dengan package premium untuk logo design.',
        sender_id: user!.id,
        recipient_id: '2',
        created_at: '2025-01-15T09:00:00Z',
        read_at: '2025-01-15T09:01:00Z',
        sender: {
          full_name: user!.email?.split('@')[0] || 'You',
          avatar_url: null
        }
      },
      {
        id: '2',
        content: 'Halo juga! Terima kasih sudah memilih jasa saya. Untuk package premium, saya bisa buatkan 3 konsep logo dengan unlimited revisi.',
        sender_id: '2',
        recipient_id: user!.id,
        created_at: '2025-01-15T09:05:00Z',
        read_at: '2025-01-15T09:06:00Z',
        sender: {
          full_name: 'Design Master',
          avatar_url: null
        }
      },
      {
        id: '3',
        content: 'Sounds good! Bisa minta contoh portfolio untuk logo restaurant?',
        sender_id: user!.id,
        recipient_id: '2',
        created_at: '2025-01-15T09:10:00Z',
        read_at: '2025-01-15T09:11:00Z',
        sender: {
          full_name: user!.email?.split('@')[0] || 'You',
          avatar_url: null
        }
      },
      {
        id: '4',
        content: 'Tentu! Saya kirim beberapa sample logo restaurant yang pernah saya buat.',
        sender_id: '2',
        recipient_id: user!.id,
        created_at: '2025-01-15T09:15:00Z',
        read_at: null,
        sender: {
          full_name: 'Design Master',
          avatar_url: null
        }
      },
      {
        id: '5',
        content: 'Halo, saya sudah selesai dengan desain logonya. Silakan dicek!',
        sender_id: '2',
        recipient_id: user!.id,
        created_at: '2025-01-15T10:30:00Z',
        read_at: null,
        sender: {
          full_name: 'Design Master',
          avatar_url: null
        }
      }
    ]
    
    setMessages(mockMessages)
    setLoadingMessages(false)
  }

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation || !user) return

    const tempMessage: Message = {
      id: `temp-${Date.now()}`,
      content: newMessage,
      sender_id: user.id,
      recipient_id: conversations.find(c => c.id === selectedConversation)?.other_user.id || '',
      created_at: new Date().toISOString(),
      read_at: null,
      sender: {
        full_name: user.email?.split('@')[0] || 'You',
        avatar_url: null
      }
    }

    setMessages(prev => [...prev, tempMessage])
    setNewMessage('')
    scrollToBottom()

    // In real app, would send to Supabase
    // const { data, error } = await supabase
    //   .from('messages')
    //   .insert([{
    //     content: newMessage,
    //     sender_id: user.id,
    //     recipient_id: conversations.find(c => c.id === selectedConversation)?.other_user.id,
    //     order_id: selectedConversation
    //   }])
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-50">
      <div className="max-w-7xl mx-auto h-full flex">
        {/* Conversations List */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">Pesan</h1>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedConversation === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {conversation.other_user.full_name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {conversation.other_user.full_name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatTime(conversation.last_message.created_at)}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-gray-600 truncate">
                        {conversation.last_message.sender_id === user.id && 'You: '}
                        {conversation.last_message.content}
                      </p>
                      {conversation.unread_count > 0 && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {conversation.unread_count}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {conversations.find(c => c.id === selectedConversation)?.other_user.full_name
                        .split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {conversations.find(c => c.id === selectedConversation)?.other_user.full_name}
                    </h3>
                    <p className="text-sm text-green-600">● Online</p>
                  </div>
                </div>
                
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                  <EllipsisVerticalIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {loadingMessages ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender_id === user.id ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender_id === user.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-gray-200 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender_id === user.id ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {formatTime(message.created_at)}
                          {message.sender_id === user.id && message.read_at && (
                            <span className="ml-1">✓✓</span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <PaperClipIcon className="h-5 w-5" />
                  </button>
                  
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Ketik pesan..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <FaceSmileIcon className="h-5 w-5" />
                  </button>
                  
                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PaperAirplaneIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <ChatBubbleLeftRightIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Pilih Percakapan</h3>
                <p>Mulai chat dengan klien atau freelancer</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}