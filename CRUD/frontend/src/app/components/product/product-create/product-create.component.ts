import { Product } from './../product.module';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  Product: Product = {
    name: "",
    id: 0,
    price: null,
} 

  constructor(private productService: ProductService, 
    private router: Router){ }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.Product).subscribe(()=>{
      this.productService.showMessage("Produto criado")
      this.router.navigate(['/product'])   
    })
  }
  
  cancel(): void {
    this.router.navigate(['/product'])  
  }
}