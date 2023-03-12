import { HttpClient, HttpHeaders } from '@angular/common/http';
import { defer } from 'rxjs';
import { HttpService } from '../http/http.service';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const getHeaders = {
      get headers() {
        return new HttpHeaders({
          "Content-Type": "application/json",
        });
      },
    };
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new CategoriesService(httpClientSpy, getHeaders as HttpService);

  });

  it('should return list of categories', (done: DoneFn) => {
    const categories = ['Phone', 'Microwaves']
    httpClientSpy.get.and.returnValue(
      defer(() => Promise.resolve(categories))
    );

    service.getAllCategories().subscribe({
      next: (value) => {
          expect(value).withContext('categories').toEqual(categories);
          done();
      },
      error: done.fail
    })
    expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
  });
});
