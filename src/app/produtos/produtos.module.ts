import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  declarations: [ProdutoListComponent, ProdutoDetailComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
