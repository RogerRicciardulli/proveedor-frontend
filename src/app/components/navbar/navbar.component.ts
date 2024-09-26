import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() activeSection!: string;

  constructor(
    private router: Router
  ){ }

  sections: any = [
    {name: "PRODUCTOS", path: "/products"}
  ]

  navigateTo(path: string){
    this.router.navigate([path])
  }

}
