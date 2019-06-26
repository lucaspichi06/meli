import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  constructor(private router: Router) { }

  buscar(termino: string) {
    this.router.navigate([ '/search', termino ]);
  }
}
