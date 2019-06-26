import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { a } from '@angular/core/src/render3';

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
    return new Promise(function(resolve, reject) {
      resolve(this.getQuery(`items/${id}`));
    });
    // return this.getQuery(`items/${id}`);
  }

  getItemDescription(id: string)  {
    return this.getQuery(`items/${id}/description`);
  }
}
