import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

}