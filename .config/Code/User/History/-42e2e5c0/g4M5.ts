// src/app/empresa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private apiUrl = 'http://18.116.27.115:8000/api/estabelecimentos/';
  private headers = new HttpHeaders({});

  constructor(private http: HttpClient) {}

  getEstabelecimentos(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}
