import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  getAllCategories(): Observable<Object> {
    return this.http.get(`${this.httpService.url}products/categories`, {
      ...this.httpService.headers,
    });
  }
}
