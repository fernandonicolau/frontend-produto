import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../../shared/model/produto.model';
import { ToastService } from '../../../shared/services/toast.service';
import { ProdutosService } from '../../services/produtos.service';
import { CarrinhoService } from '../../../carrinho/services/carrinho.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.scss'],
})
export class ProdutoDetailComponent implements OnInit {
  produto!: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.buscarPorId(id).subscribe((response) => {
      this.produto = response;
    });
  }

  adicionarAoCarrinho(): void {
    const item: Produto = { ...this.produto, quantidadeNoCarrinho: 1 };
    const carrinho: Produto[] = JSON.parse(
      localStorage.getItem('carrinho') || '[]'
    );
    const existente = carrinho.find((p) => p.id === item.id);
    if (existente) {
      existente.quantidadeNoCarrinho!++;
    } else {
      carrinho.push(item);
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    this.carrinhoService.adicionar(this.produto);
    this.toast.show('Produto adicionado ao carrinho!', 'success');
  }
}
