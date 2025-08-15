import Link from 'next/link'
import { 
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              JasaHub
            </div>
            <p className="text-gray-300 mb-4">
              Platform marketplace terdepan untuk freelancer Indonesia. 
              Temukan jasa terbaik atau mulai jual keahlianmu hari ini.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.312-.219-.312-.219c0-.937.219-1.624.937-1.624.312 0 .624.219.624.624 0 .312-.219.937-.312 1.249-.219.937.312 1.624 1.249 1.624 1.562 0 2.967-1.624 2.967-4.062 0-1.874-1.312-3.279-3.499-3.279-2.499 0-4.062 1.875-4.062 3.967 0 .781.312 1.624.624 2.124.219.312.312.624.219.937-.219.312-.624 1.249-.624 1.249-.312.624-.937.312-1.249.219-1.562-.624-2.499-2.499-2.499-4.374 0-3.967 2.967-7.593 8.592-7.593 4.499 0 7.967 3.186 7.967 7.436 0 4.437-2.811 8.016-6.717 8.016-1.312 0-2.499-.687-2.967-1.499l-.812 3.124c-.312 1.187-1.124 2.624-1.687 3.499 1.312.437 2.687.624 4.062.624 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.312-.625-.312-1.562c0-1.437.781-2.5 1.875-2.5.937 0 1.406.625 1.406 1.406 0 .875-.625 2.187-.937 3.406-.312 1.312.625 2.375 1.875 2.375 2.25 0 4.062-2.375 4.062-5.781 0-3.031-2.187-5.156-5.281-5.156-3.656 0-5.781 2.656-5.781 5.625 0 1.125.469 2.312.937 2.969.312.375.312.531.219.875-.094.312-.312 1.187-.406 1.375-.125.312-.406.375-.719.25-2.031-.906-3.281-3.781-3.281-6.094 0-4.969 3.656-9.531 10.406-9.531 5.469 0 9.688 3.906 9.688 9.094 0 5.406-3.406 9.781-8.188 9.781-1.625 0-3.125-.844-3.625-1.969-.781 2.969-1 3.656-1.094 4.156-.406 1.281-1.312 2.875-2.031 3.875 1.5.469 3.125.719 4.812.719 6.625 0 11.992-5.367 11.992-11.987C24.009 5.367 18.642.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="text-gray-300 hover:text-white">
                  Jelajahi Jasa
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white">
                  Kategori
                </Link>
              </li>
              <li>
                <Link href="/become-seller" className="text-gray-300 hover:text-white">
                  Jadi Penjual
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white">
                  Cara Kerja
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-white">
                  Kisah Sukses
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori Popular</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse/design" className="text-gray-300 hover:text-white">
                  Desain Grafis
                </Link>
              </li>
              <li>
                <Link href="/browse/development" className="text-gray-300 hover:text-white">
                  Pengembangan Web
                </Link>
              </li>
              <li>
                <Link href="/browse/marketing" className="text-gray-300 hover:text-white">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/browse/writing" className="text-gray-300 hover:text-white">
                  Penulisan & Konten
                </Link>
              </li>
              <li>
                <Link href="/browse/video" className="text-gray-300 hover:text-white">
                  Video & Animasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-300">
                  Jakarta, Indonesia
                </span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:hello@jasahub.id" className="text-gray-300 hover:text-white">
                  hello@jasahub.id
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                <a href="tel:+6285123456789" className="text-gray-300 hover:text-white">
                  +62 851-2345-6789
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 JasaHub. Hak cipta dilindungi undang-undang.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Syarat & Ketentuan
              </Link>
              <Link href="/help" className="text-gray-400 hover:text-white text-sm">
                Bantuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}