import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../data/menuData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-demon-red/70 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-20 bg-demon-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg">
          {product.badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60"></div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-2xl font-bold text-white uppercase group-hover:text-demon-red transition-colors">
            {product.name}
          </h3>
          <span className="font-display text-xl text-demon-red font-bold">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <p className="text-gray-400 font-body text-sm leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>

        <button className="w-full mt-auto py-3 bg-zinc-800 hover:bg-demon-red text-white font-display font-bold tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
          <ShoppingBag size={18} />
          Ordenar
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;