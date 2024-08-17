import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: false}) img: string = "https://picsum.photos/640/640/?r="+this.getRandom();

  @Input({required: true}) title: string = "";


  @Output() addToCart = new EventEmitter();

  addToCartHander(){
    console.log("cilc desde el hijo" + this.title);
    this.addToCart.emit("hola, desde el "+this.title);
  }

  price = signal(this.getRandom());
  
  getRandom(){
    return (1000 + Math.random() * 10000).toFixed(0); 
  }
}
