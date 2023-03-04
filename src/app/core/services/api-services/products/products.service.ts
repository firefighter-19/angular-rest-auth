import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  getAllProducts() {}

  getProductsOfACategory() {}
}
