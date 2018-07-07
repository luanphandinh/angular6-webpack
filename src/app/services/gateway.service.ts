import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GatewayService {

  API_KEY: string = '605c55461e7f4542f6ef82fdc9c4a249';

  constructor(private http: HttpClient) {
  }

  getApi(queryUrl: string, options: any = {}): Observable<any> {
    options.api_key = this.API_KEY;
    const params: HttpParams = this.formatFetchParams(options);

    const endpoint = ['https://api.themoviedb.org/3', queryUrl].join('/');

    return this.http.get(endpoint, {
      params,
    });
  }

  postApi(endpoint: string, data: any = {}): Observable<any> {
    data.api_key = this.API_KEY;
    return this.http.post(endpoint, data);
  }

  formatFetchParams(fetchOptions: any): HttpParams {
    return Object.getOwnPropertyNames(fetchOptions)
      .reduce(
        (p, keyValue) => {
          let key = keyValue;
          const data = fetchOptions[key];
          if (!data) {
            return p;
          }
          if (Array.isArray(data)) {
            key = key + '[]';
          }
          return p.set(key, data);
        },
        new HttpParams());
  }
}
