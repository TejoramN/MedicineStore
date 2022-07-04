import { Medicine } from "./Medicine";

export class CartItem{

  constructor( public item:Medicine){ }
  quantity:number=1;
  price:number=this.item.price;
}
