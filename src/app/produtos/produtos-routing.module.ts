import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';

const routes: Routes = [
  { path: '', component: ProdutoListComponent },
  { path: ':id', component: ProdutoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
