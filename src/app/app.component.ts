import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ToastService } from './shared/services/toast.service';
import { SharedModule } from './shared/shared.module';
import { CarrinhoService } from './carrinho/services/carrinho.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  totalItensCarrinho = 0;

  constructor(
    private toastService: ToastService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.carrinhoService.totalItens$.subscribe((total) => {
      this.totalItensCarrinho = total;
    });
  }

  ngAfterViewInit(): void {
    this.toastService.register(this.toastComponent);
  }
}
