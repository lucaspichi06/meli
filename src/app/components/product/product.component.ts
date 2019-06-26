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
  description: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private meli: MeliserviceService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      console.log(params['id']);
      this.getItem(params['id']);
      this.getItemDescription(params['id']);
      this.loading = false;

      console.log(this.item);
      console.log(this.description);
    });
  }

  getItem(id: string) {
    // this.meli.getItem(id).subscribe(item => {
    //   this.item = item;
    // });
    // this.meli.getItem(id).then(function(value) {
    //   console.log('success', value);
    // }, function(reason) {
    //   console.log('error' , reason);
    // });
    this.meli.getItem(id).then((data) => {
      console.log(data);
    });
  }

  getItemDescription(id: string) {
    // this.meli.getItemDescription(id).subscribe((description: any) => {
    //   this.description = description;
    // });
    this.meli.getItemDescription(id);
  }
}
