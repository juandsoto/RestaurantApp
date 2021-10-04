export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  modal: string;
  confirm: string;
  quantity?: number;
}
export interface Checkout {
  products: Product[];
  total: number;
}
