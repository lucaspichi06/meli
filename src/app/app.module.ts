import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// http
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';

// routes
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ProductComponent,
    LoadingComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
