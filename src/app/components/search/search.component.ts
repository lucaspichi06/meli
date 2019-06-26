import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeliserviceService } from '../../services/meliservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  items: any[] = [];
  loading: boolean;
  constructor(private router: ActivatedRoute, private meli: MeliserviceService, private rout: Router) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.buscar(params['q']);
      this.loading = false;
    });
  }

  buscar(termino: string) {
    this.loading = true;
    this.meli.getItems(termino).subscribe((data: any) => {
      this.items = data;
      this.loading = false;
    });
  }

  verItem(item: any) {
    this.rout.navigate([ '/product', item.id ]);
  }

}
