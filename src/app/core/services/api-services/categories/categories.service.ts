import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.httpService.url}products/categories`,
      {
        headers: this.httpService.headers,
      }
    );
  }
}
