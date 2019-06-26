import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeliserviceService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.mercadolibre.com/${query}`;

    return this.http.get(url);
  }

  getItems(termino: string) {
    return this.getQuery(`sites/MLA/search?q=:${termino}&limit=4`).pipe(map( data => data['results']));
  }

  getItem(id: string) {
    const promise = new Promise((resolve, reject) => {
      this.getQuery(`items/${id}`).toPromise()
      .then(
        res => { // Success
          resolve(res);
        }
      );
    });
    return promise;
  }

  getItemDescription(id: string)  {
    const promise = new Promise((resolve, reject) => {
      this.getQuery(`items/${id}/description`).toPromise()
      .then(
        res => { // Success
          resolve(res);
        }
      );
    });
    return promise;
  }
}
