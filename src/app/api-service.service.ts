import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  url = 'http://127.0.0.1:8000/'
  
  constructor(private http:HttpClient) { }

  getProduct() {
    return this.http.get(this.url + 'product');
  }

  addProduct(data: any) {
    return this.http.post(this.url + 'product/add', data)
  }

  deleteProduct(data: any, updatedBody: any) {
    const endpointURL = this.url + 'product/' + data + '/delete'
    return this.http.put(endpointURL, updatedBody)
  }

  getCategory() {
    return this.http.get(this.url + 'catagory');
  }
  
}
