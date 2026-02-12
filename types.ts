export interface Product {
  id: string;
  name: string;
  subname?: string;
  description: string;
  price?: number;
  image: string;
  type: 'premium' | 'everyday' | 'exotic';
  theme: 'light' | 'dark' | 'gold';
}

export interface CartItem {
  productId: string;
  quantity: number;
}