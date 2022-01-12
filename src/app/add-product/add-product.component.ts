import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  getProductFormData(data:any) {
    this.http.post<any>("https://127.0.0.1:8000/product/add", data).subscribe((res)=>{
      console.log(res);
      
    })
    console.log(data);
    
  }
  constructor(private http:HttpClient) {
    
  }

  ngOnInit(): void {
  }

}
