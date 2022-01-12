import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private apiServiceService:ApiServiceService) { }
  productlist: any;

  showProduct() {
    
  }

  ngOnInit(): void {
    this.apiServiceService.getProduct().subscribe(data => {
      this.productlist = data;
      console.log(this.productlist);     
    })
  }

}
