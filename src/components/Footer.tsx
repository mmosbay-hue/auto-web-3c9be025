import { ClockIcon } from './icons/ClockIcon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-yellow-400 mb-4">
              <ClockIcon className="h-7 w-7" />
              <span>LUXETIME</span>
            </a>
            <p className="text-sm">The finest collection of luxury timepieces. Curated for the discerning connoisseur.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for exclusive offers and new arrivals.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full rounded-l-md border-0 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button type="submit" className="rounded-r-md bg-yellow-400 px-4 py-2 font-semibold text-black transition-colors hover:bg-yellow-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LUXETIME. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
