import { Injectable } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastComponent!: ToastComponent;
  toasts: { message: string; type: 'success' | 'error' }[] = [];

  register(toast: ToastComponent) {
    this.toastComponent = toast;
  }

  show(message: string, type: 'success' | 'error' = 'success'): void {
    this.toasts.push({ message, type });
    setTimeout(() => {
      this.toasts.shift();
    }, 2000);
  }
}
