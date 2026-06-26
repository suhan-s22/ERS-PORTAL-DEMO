import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requisition } from '../models/requisition';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {

  private readonly apiUrl = 'http://localhost:8080/api/requisition';

  private http = inject(HttpClient);

  createRequisition(requisition: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      this.apiUrl,
      requisition
    );
  }

  getAllRequisitions(): Observable<Requisition[]> {
  return this.http.get<Requisition[]>(this.apiUrl);
}

getRequisitionById(id: number): Observable<Requisition> {
  return this.http.get<Requisition>(`${this.apiUrl}/${id}`);
}

}