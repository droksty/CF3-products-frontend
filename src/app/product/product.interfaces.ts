export interface Product {
  product: string;
  description: string;
  cost: string;
  quantity: string;
}

export interface ProductAPIList {
  status: boolean;
  data: Product[];
}