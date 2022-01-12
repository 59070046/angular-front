import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getProduct() {
    return this.http.get('http://127.0.0.1:8000/product', {
      headers: {'Access-Control-Allow-Origin': '*'}
    });
  }
}
