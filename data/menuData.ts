import { Product } from '../types';

// Helper to format currency
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(price);
};

export const combos: Product[] = [
  {
    id: 'c1',
    name: 'Combo El Ritual',
    description: 'Clásica Premium + Papas + Bebida',
    price: 7990,
    image: 'https://picsum.photos/500/500?random=1',
    category: 'combo',
    badge: 'POPULAR'
  },
  {
    id: 'c2',
    name: 'Combo El Jefe',
    description: 'Big Mom 240g + Papas + Bebida',
    price: 12990,
    image: 'https://picsum.photos/500/500?random=2',
    category: 'combo',
    badge: 'BRUTAL'
  },
  {
    id: 'c3',
    name: 'Combo Green Demon',
    description: 'Burger Palta + Papas Chicas + Bebida',
    price: 11490,
    image: 'https://picsum.photos/500/500?random=3',
    category: 'combo'
  }
];

export const burgers: Product[] = [
  {
    id: 'b1',
    name: 'Big Mom',
    description: 'Doble carne de 120 gm (240 gm total) de res seleccionada, doble queso cheddar fundido, doble ración de tocino ahumado y nuestra salsa Demon\'s de la casa.',
    price: 12490,
    image: 'https://picsum.photos/500/500?random=4',
    category: 'burger',
    badge: 'BEST SELLER'
  },
  {
    id: 'b2',
    name: 'Mollie',
    description: 'Doble carne de 90 gm (180 gm total), cebolla caramelizada, la sorpresa crujiente de aros de cebolla dorados, doble cheddar y un baño de salsa BBQ.',
    price: 10990,
    image: 'https://picsum.photos/500/500?random=5',
    category: 'burger'
  },
  {
    id: 'b3',
    name: 'Sriracha Hell',
    description: 'Hamburguesa 125g, dos aros de cebolla crujientes, cebolla blanca, salsa Demon\'s de la casa y salsa siracha.',
    price: 9500,
    image: 'https://picsum.photos/500/500?random=6',
    category: 'burger',
    badge: 'PICANTE'
  },
  {
    id: 'b4',
    name: 'Baby Queen',
    description: 'Carne de 120 g, queso cheddar fundido, cebolla crujiente, pepinillos dulces y el equilibrio perfecto entre salsa BBQ y salsa Demon\'s. Incluye papas fritas.',
    price: 9500,
    image: 'https://picsum.photos/500/500?random=7',
    category: 'burger'
  },
  {
    id: 'b5',
    name: 'Clásica Premium',
    description: 'Carne de 120 gm, tocino crujiente, cebolla caramelizada, pepinillo agridulce y lechuga hidropónica fresca con salsa Demon\'s.',
    price: 7500,
    image: 'https://picsum.photos/500/500?random=8',
    category: 'burger'
  },
  {
    id: 'b6',
    name: 'Cheese Burger',
    description: 'Jugosa carne de 120 gm, abundante queso cheddar y nuestra exclusiva salsa Demon\'s de la casa.',
    price: 6990,
    image: 'https://picsum.photos/500/500?random=9',
    category: 'burger'
  }
];