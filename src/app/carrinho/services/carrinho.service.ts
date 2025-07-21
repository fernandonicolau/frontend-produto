import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../../shared/model/produto.model';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private carrinho: Produto[] = [];

  private _totalItens = new BehaviorSubject<number>(0);
  totalItens$ = this._totalItens.asObservable();

  constructor() {
    this.carregarCarrinho();
  }

  private carregarCarrinho(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const carrinhoStorage = localStorage.getItem('carrinho') || '[]';
      this.carrinho = JSON.parse(carrinhoStorage);
      this.atualizarTotal();
    }
  }

  private atualizarTotal(): void {
    const total = this.carrinho.reduce(
      (acc, p) => acc + (p.quantidadeNoCarrinho || 1),
      0
    );
    this._totalItens.next(total);
  }

  getCarrinho(): Produto[] {
    return this.carrinho;
  }

  adicionar(produto: Produto): void {
    const existente = this.carrinho.find((p) => p.id === produto.id);
    if (existente) {
      existente.quantidadeNoCarrinho!++;
    } else {
      this.carrinho.push({ ...produto, quantidadeNoCarrinho: 1 });
    }
    this.salvarCarrinho();
  }

  removerItem(produto: Produto): void {
    const item = this.carrinho.find((p) => p.id === produto.id);
    if (item) {
      if ((item.quantidadeNoCarrinho || 1) > 1) {
        item.quantidadeNoCarrinho!--;
      } else {
        this.carrinho = this.carrinho.filter((p) => p.id !== produto.id);
      }
      this.salvarCarrinho();
    }
  }

  limparCarrinho(): void {
    this.carrinho = [];
    this.salvarCarrinho();
  }

  atualizarQuantidade(produtoId: number, novaQuantidade: number): void {
    const item = this.carrinho.find((p) => p.id === produtoId);
    if (item && novaQuantidade >= 1 && novaQuantidade <= 99) {
      item.quantidadeNoCarrinho = novaQuantidade;
      this.salvarCarrinho();
    }
  }

  private salvarCarrinho(): void {
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    this.atualizarTotal();
  }
}
