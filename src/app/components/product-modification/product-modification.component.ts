import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-modification',
  templateUrl: './product-modification.component.html',
  styleUrls: ['./product-modification.component.css']
})
export class ProductModificationComponent {
  validateProduct: FormGroup;
  response: string | undefined;
  productId!: number;

  constructor(
    private route: ActivatedRoute,
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.getProduct(this.productId);
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
      this.editProduct(name, size, color, photo, stock);
    } else {
      this.response = "El formulario contiene errores. Por favor, verifique los campos.";
    }
  }
  editProduct(name: string, size: string, color: string, photo: string, stock: number): void {
    //llamada al servicio{}
    this.router.navigate(["/products"]);
  }
  getProduct(id: number): void {
    //llamada al servicio {}
    /*
      this.validateImage.patchValue({
        code: this.store.code,
        name: this.store.name,
        size: this.store.size,
        color: this.store.color,
        photo: this.store.photo,
      });
    */
  }
}