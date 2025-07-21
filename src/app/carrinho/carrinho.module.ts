import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoListComponent } from './components/carrinho-list/carrinho-list.component';

@NgModule({
  declarations: [CarrinhoListComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, CarrinhoRoutingModule],
})
export class CarrinhoModule {}
