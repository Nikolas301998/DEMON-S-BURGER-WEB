export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'combo' | 'burger';
  badge?: string;
}

export interface CategorySection {
  title: string;
  items: Product[];
}