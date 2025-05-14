import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(
    private http: HttpClient,
    @Inject('url') private url: string,
  ) { }

  get<TModel>(): Observable<TModel> {
    return this.http.get<TModel>(`${environment.apiUrl}${this.url}`);
  }

  getById<TModel, TId>(id: TId): Observable<TModel> {
    return this.http.get<TModel>(`${environment.apiUrl}${this.url}/${id}`);
  }

  post<TModel>(data: TModel): Observable<TModel> {
    return this.http.post<TModel>(`${environment.apiUrl}${this.url}`, data);
  }

  refresh(): Observable<boolean> {
    return this.http.get<boolean>(`${environment.apiUrl}${this.url}/refresh`);
  }

  update<TModel, TId>(id: TId, data: TModel): Observable<TModel> {
    return this.http.put<TModel>(`${environment.apiUrl}${this.url}/${id}`, data);
  }

  patch<TModel, TId>(id: TId, data: TModel): Observable<TModel> {
    return this.http.patch<TModel>(`${environment.apiUrl}${this.url}/${id}`, data);
  }
}
