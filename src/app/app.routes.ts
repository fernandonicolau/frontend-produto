import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'produtos',
  },
  { path: '**', redirectTo: '/produtos', pathMatch: 'full' },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./carrinho/carrinho.module').then((m) => m.CarrinhoModule),
  },
];
