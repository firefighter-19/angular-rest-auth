import { IProductsPaginationOptions } from "../interfaces/products";

export interface IProductsWithCategory extends IProductsPaginationOptions {
  categoryName: string;
}
