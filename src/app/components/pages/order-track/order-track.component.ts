import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-track',
  templateUrl: './order-track.component.html',
  styleUrls: ['./order-track.component.css']
})
export class OrderTrackComponent implements OnInit {

  order:Order = new Order();
  checkoutForm!: FormGroup;


  constructor(cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
     private route: Router) {
      const cart = cartService.getCart();
      this.order.items = cart.items;
      this.order.totalPrice = cart.totalPrice;

   }

  ngOnInit(): void {
    let{name,address}= this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address:[address, Validators.required]
    });
  }

  goTOHome(){
    this.route.navigateByUrl('/home')
  }

}
