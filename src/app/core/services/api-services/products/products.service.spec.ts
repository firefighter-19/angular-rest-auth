import { HttpClient, HttpHeaders } from "@angular/common/http";
import { defer } from "rxjs";
import { IProductsWithCategory } from "src/app/core/dto/category-products.dto";
import {
  IProducts,
  IProductsPaginationOptions,
} from "src/app/core/interfaces/products";
import { HttpService } from "../http/http.service";

import { ProductsService } from "./products.service";

describe("ProductsService", () => {
  let service: ProductsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const params: IProductsPaginationOptions = {
    limit: 10,
    skip: 0,
  };

  beforeEach(() => {
    const getHeaders = {
      get headers() {
        return new HttpHeaders({
          "Content-Type": "application/json",
        });
      },
    };
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new ProductsService(httpClientSpy, getHeaders as HttpService);
  });

  it("should return products list", (done: DoneFn) => {
    const products: IProducts = {
      total: 10,
      products: [
        {
          id: 1,
          category: "Category",
          description: "Description",
          discountPercentage: 10,
          images: ["url"],
          price: 100,
          rating: 5,
          stock: 100,
          thumbnail: "thumbnail",
          title: "Title",
        },
      ],
    };
    httpClientSpy.get.and.returnValue(defer(() => Promise.resolve(products)));

    service.getAllProducts(params).subscribe({
      next: (value) => {
        expect(value).withContext("products").toEqual(products);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
  });

  it("should return products list of particular category", (done: DoneFn) => {
    const paramsWithCategory: IProductsWithCategory = {
      ...params,
      categoryName: "Category",
    };
    const products: IProducts = {
      total: 10,
      products: [
        {
          id: 1,
          category: "Category",
          description: "Description",
          discountPercentage: 10,
          images: ["url"],
          price: 100,
          rating: 5,
          stock: 100,
          thumbnail: "thumbnail",
          title: "Title",
        },
      ],
    };
    httpClientSpy.get.and.returnValue(defer(() => Promise.resolve(products)));

    service.getProductsOfACategory(paramsWithCategory).subscribe({
      next: (value) => {
        expect(value).withContext("products").toEqual(products);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
  });
});
