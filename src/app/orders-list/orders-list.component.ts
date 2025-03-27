import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent {

  orders:any
  constructor(private cart:CartService){
    this.cart.getOrders().subscribe(
      (data)=>this.orders=data
    )
  }
}
