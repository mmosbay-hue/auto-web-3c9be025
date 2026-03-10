import { ClockIcon } from './icons/ClockIcon';
import { UserIcon } from './icons/UserIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm text-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-yellow-400">
          <ClockIcon className="h-7 w-7" />
          <span>LUXETIME</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Collections</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Brands</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <UserIcon className="h-6 w-6" />
          </button>
          <button className="relative text-gray-300 hover:text-white transition-colors">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">3</span>
          </button>
        </div>
      </div>
    </header>
  );
}
