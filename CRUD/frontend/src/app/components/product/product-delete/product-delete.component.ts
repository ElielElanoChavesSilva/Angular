import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  Product!: Product

  constructor (
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    this.productService.readById(id ? +id : 0).subscribe(product => {
      this.Product = product
    })
  }

  delete(): void {
    this.productService.delete(this.Product.id).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso! ')
      this.router.navigate(['/product']);
    })
  }

  cancel(): void {
    this.router.navigate(['product'])
  }
}
