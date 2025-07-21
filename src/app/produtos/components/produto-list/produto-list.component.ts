import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../../shared/model/produto.model';
import { ProdutosService } from '../../services/produtos.service';
@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.scss',
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];
  searchTerm: string = '';
  ordenacaoSelecionada = 'nome-asc';
  private searchTimeout: any;

  constructor(
    private produtoService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscar();
  }

  onSearch(): void {
    clearTimeout(this.searchTimeout);
    if (this.searchTerm.length >= 3 || this.searchTerm.length === 0) {
      this.searchTimeout = setTimeout(() => {
        const [orderBy, orderDir] = this.ordenacaoSelecionada
          ? this.ordenacaoSelecionada.split('-')
          : ['nome', 'asc'];
        this.buscar(this.searchTerm, orderBy, orderDir);
      }, 300);
    }
  }

  limparBusca(): void {
    this.searchTerm = '';
    this.ordenacaoSelecionada = 'nome-asc';
    this.buscar();
  }

  buscar(
    filtro: string = '',
    orderBy: string = 'nome',
    orderDir: string = 'asc'
  ): void {
    this.produtoService.listar(filtro, orderBy, orderDir).subscribe({
      next: (produtos) => (this.produtos = produtos),
      error: () => (this.produtos = []),
    });
  }

  verDetalhes(id: number): void {
    this.router.navigate(['/produtos/detalhe'], { queryParams: { id } });
  }
}
