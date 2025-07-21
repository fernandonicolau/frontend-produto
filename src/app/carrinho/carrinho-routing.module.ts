import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoListComponent } from './components/carrinho-list/carrinho-list.component';

const routes: Routes = [{ path: '', component: CarrinhoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhoRoutingModule {}
