import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _fakeApi: string = "https://dummyjson.com/";
  private _headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  get url() {
    return this._fakeApi;
  }

  get headers() {
    return this._headers;
  }

  set headers(headers: HttpHeaders) {
    this._headers = headers;
  }
}
