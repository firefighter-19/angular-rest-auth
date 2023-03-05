export interface IProducts {
  total: number;
  products: IProductsItems[];
}

export interface IProductsPaginationOptions {
  limit: number;
  skip: number;
}

export interface IProductsItems {
  id: number;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
