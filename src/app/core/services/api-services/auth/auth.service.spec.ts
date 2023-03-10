import { HttpClient, HttpHeaders } from "@angular/common/http";
import { defer } from "rxjs";
import { ILogin } from "src/app/core/interfaces/login";
import { HttpService } from "../http/http.service";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const getHeaders = {
      get headers() {
        return new HttpHeaders({
          "Content-Type": "application/json",
        });
      },
    };
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["post"]);
    service = new AuthService(httpClientSpy, getHeaders as HttpService);
  });

  it("it should log in the user", (done: DoneFn) => {
    const loginData = { username: "kminchelle", password: "0lelplR" };
    const expectedUser: ILogin & { token: string } = {
      email: "email",
      firstName: "name",
      gender: "gender",
      id: 123,
      image: "url",
      lastName: "lastname",
      username: "username",
      token: "123213231",
    };

    httpClientSpy.post.and.returnValue(
      defer(() => Promise.resolve(expectedUser))
    );

    service.login(loginData).subscribe({
      next: (data) => {
        expect(data).withContext("expectedUser").toEqual(expectedUser);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.post.calls.count()).withContext("one call").toBe(1);
  });
});
