import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/model/produto.model';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho-list',
  templateUrl: './carrinho-list.component.html',
  styleUrls: ['./carrinho-list.component.scss'],
})
export class CarrinhoListComponent implements OnInit {
  carrinho: Produto[] = [];
  total = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho(): void {
    this.carrinho = this.carrinhoService.getCarrinho();
    this.calcularTotal();
  }

  removerItem(produto: Produto): void {
    this.carrinhoService.removerItem(produto);
    this.carregarCarrinho();
  }

  alterarQuantidade(produto: Produto, novaQtd: number): void {
    if (novaQtd < 1 || novaQtd > 99) return;
    this.carrinhoService.atualizarQuantidade(produto.id, novaQtd);
    this.carregarCarrinho();
  }

  limparCarrinho(): void {
    this.carrinhoService.limparCarrinho();
    this.carrinho = [];
    this.total = 0;
  }

  validarQuantidade(produto: Produto): void {
    if (!produto.quantidadeNoCarrinho || produto.quantidadeNoCarrinho < 1) {
      produto.quantidadeNoCarrinho = 1;
    } else if (produto.quantidadeNoCarrinho > 99) {
      produto.quantidadeNoCarrinho = 99;
    }
    this.carrinhoService.atualizarQuantidade(
      produto.id,
      produto.quantidadeNoCarrinho
    );
    this.carregarCarrinho();
  }

  private calcularTotal(): void {
    this.total = this.carrinho.reduce(
      (soma, produto) =>
        soma + Number(produto.preco) * (produto.quantidadeNoCarrinho || 1),
      0
    );
  }
}
