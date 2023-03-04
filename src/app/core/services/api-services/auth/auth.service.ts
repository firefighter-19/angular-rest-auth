import { HttpService } from "../http/http.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILogin } from "../../../interfaces/login";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Observable<ILogin> {
    const body = { username, password };
    return this.http.post<ILogin>(`${this.httpService.url}auth/login`, body, {
      ...this.httpService.headers,
    });
  }

  signUp() {}
}
