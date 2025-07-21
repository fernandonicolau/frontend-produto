import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Produto } from '../../shared/model/produto.model';

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private readonly API = 'https://backend-produto.onrender.com/produtos';

  constructor(private http: HttpClient) {}

  listar(
    search = '',
    orderBy = 'nome',
    orderDir = 'asc'
  ): Observable<Produto[]> {
    let params = new HttpParams()
      .set('orderBy', orderBy)
      .set('orderDir', orderDir);

    if (search) {
      params = params.set('search', search);
    }

    return this.http
      .get<ApiResponse<Produto[]>>(this.API, { params })
      .pipe(map((res) => res.data));
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http
      .get<ApiResponse<Produto>>(`${this.API}/${id}`)
      .pipe(map((res) => res.data));
  }
}
