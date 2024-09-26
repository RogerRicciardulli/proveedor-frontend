import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent {
  validateProduct: FormGroup;
  response: string | undefined;

  constructor(
    private router: Router
  ) {
    this.validateProduct = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      size: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      photo: new FormControl(),
      stock: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    this.response = "";
    if (this.validateProduct.valid) {
      const name = this.validateProduct.get('name')?.value;
      const size = this.validateProduct.get('size')?.value;
      const color = this.validateProduct.get('color')?.value;
      const photo = this.validateProduct.get('photo')?.value;
      const stock = this.validateProduct.get('stock')?.value;
      this.registerProduct(name, size, color, photo, stock);
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }
  registerProduct(name: string, size: string, color: string, photo: string, stock: number): void {
    // Call your service to register the product with the selected categories
    this.router.navigate(["/products"]);
  }
}
