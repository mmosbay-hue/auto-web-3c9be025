import type { Watch } from '@/types';

interface ProductCardProps {
  watch: Watch;
}

export default function ProductCard({ watch }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={watch.imageUrl}
          alt={watch.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-300">{watch.brand}</p>
        <h3 className="mt-1 text-xl font-semibold leading-tight">{watch.name}</h3>
        <p className="mt-2 text-lg font-bold text-yellow-400">${watch.price.toLocaleString()}</p>
      </div>
      {(watch.isNew || watch.isBestSeller) && (
        <div className="absolute top-4 right-4">
          {watch.isNew && <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">New</span>}
          {watch.isBestSeller && <span className="ml-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">Best Seller</span>}
        </div>
      )}
    </div>
  );
}
