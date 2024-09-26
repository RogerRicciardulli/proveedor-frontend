import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products : Product[] = [];
  constructor(
    private router: Router
  ){}
  ngOnInit() {
    this.getProducts();
  }  
  getProducts(){ 
    //llamada al servicio {}
    this.products = [
      {
        id: 1,
        code: 'PROD001',
        name: 'T-Shirt',
        size: 'L',
        color: "12345",
        photo: "67890",
        stock: 1
      },
      {
        id: 2,
        code: 'PROD002',
        name: 'Jeans',
        size: 'M',
        color: "54321",
        photo: "98765",
        stock: 2
      }
    ];
  }
  createProduct(){
    this.router.navigate(['/product/creation']);
  }
}
