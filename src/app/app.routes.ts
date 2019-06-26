import {Routes} from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    {path: 'product/:id', component: ProductComponent},
    {path: 'search/:q',  component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'search'},
    {path: '**', pathMatch: 'full', redirectTo: 'search'}
];
