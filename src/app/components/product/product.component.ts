import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeliserviceService } from '../../services/meliservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {
  item: any = {};
  description: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private meli: MeliserviceService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      console.log(params['id']);
      this.getItem(params['id']);
      this.getItemDescription(params['id']);
      this.loading = false;
    });
  }

  getItem(id: string) {
    this.meli.getItem(id).then((data) => {
      this.item = data;
    });
  }

  getItemDescription(id: string) {
    this.meli.getItemDescription(id).then((data) => {
      this.description = data;
    });
  }
}
