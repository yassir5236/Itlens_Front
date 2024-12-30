import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) {}

  getOwners(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9090/api/owners'); 
  }
}
