import ProductCard from '@/components/ProductCard';
import { watches } from '@/data/watches';

export default function HomePage() {
  const newArrivals = watches.filter(watch => watch.isNew);
  const bestSellers = watches.filter(watch => watch.isBestSeller);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1594576722539-a71956e21b54?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury watch collection" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            Timeless Elegance
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
            Discover our exclusive collection of luxury timepieces from the world's most renowned brands.
          </p>
          <a 
            href="#new-arrivals" 
            className="mt-8 inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">New Arrivals</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Be the first to own the latest masterpieces of horology.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map(watch => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Best Sellers</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Discover the timepieces that have captured the hearts of collectors worldwide.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(watch => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-400 mb-10">As Featured In</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <span className="text-2xl font-serif text-gray-500 opacity-70 hover:opacity-100 transition-opacity">VOGUE</span>
            <span className="text-2xl font-serif text-gray-500 opacity-70 hover:opacity-100 transition-opacity">GQ</span>
            <span className="text-2xl font-serif text-gray-500 opacity-70 hover:opacity-100 transition-opacity">Esquire</span>
            <span className="text-2xl font-serif text-gray-500 opacity-70 hover:opacity-100 transition-opacity">HODINKEE</span>
            <span className="text-2xl font-serif text-gray-500 opacity-70 hover:opacity-100 transition-opacity">The Rake</span>
          </div>
        </div>
      </section>
    </div>
  );
}
