import { HttpService } from "../http/http.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  login({ username, password }: { username: string; password: string }) {
    const body = { username, password };
    return this.http.post(this.httpService.url, body, {
      ...this.httpService.headers,
    });
  }

  signUp() {}
}
