// transporter.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import {Product} from "../classes/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/products';
  private productSubject = new BehaviorSubject<Product[]>([]);
  transporters$ = this.productSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getTransporters();
  }

  getTransporters(): void{
    this.http.get<Product[]>(this.apiUrl).subscribe(
      (initialTransporters) => {
        this.productSubject.next(initialTransporters);
      },
      (error) => {
        console.error('Error al obtener la lista de transportistas:', error);
      }
    );
  }

  updateTransporter(updatedTransporter: Product): Observable<Product> {
    const url = `${this.apiUrl}/${updatedTransporter.id}`;
    return this.http.put<Product>(url, updatedTransporter).pipe(
      tap((response) => {
        const currentTransporters = this.productSubject.value;
        const index = currentTransporters.findIndex(t => t.id === updatedTransporter.id);

        if (index !== -1) {
          currentTransporters[index] = response;
          this.productSubject.next([...currentTransporters]);
        }
      })
    );
  }

  addTransporter(newTransporter: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newTransporter).pipe(
      tap((response): void => {
        let currentTransporters: Product[] = this.productSubject.value;
        currentTransporters.push(response);
        this.productSubject.next([...currentTransporters]);
      })
    );
  }

  getTransporterDetails(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  deleteTransporter(transporterId: number): Observable<Product> {
    const deleteUrl = `${this.apiUrl}/${transporterId}`;
    return this.http.delete<Product>(deleteUrl).pipe(
      tap((response): void => {
        let currentTransporters: Product[] = this.productSubject.value;
        currentTransporters.splice(currentTransporters.findIndex(item => item.id == transporterId), 1);
        this.productSubject.next([...currentTransporters]);
      })
    );
  }

}
