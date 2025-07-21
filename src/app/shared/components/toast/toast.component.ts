import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  show = false;
  message = '';
  type: 'success' | 'error' = 'success';

  exibir(message: string, type: 'success' | 'error' = 'success') {
    this.message = message;
    this.type = type;
    this.show = true;

    setTimeout(() => (this.show = false), 3000);
  }

  fechar() {
    this.show = false;
  }

  removerToast(toast: any): void {
    const index = this.toastService.toasts.indexOf(toast);
    if (index !== -1) this.toastService.toasts.splice(index, 1);
  }
}
