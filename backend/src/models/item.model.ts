import { model, Schema } from "mongoose";

export interface Medicine{
  id:string;
  name:string;
  price:number;
  tags:string[];
  age:string;
  expiryDate: string;
  description:string;
  imageUrl: string;
}

export const ItemSchema = new Schema<Medicine>(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    tags: {type: [String]},
    age: {type: String, required: true},
    expiryDate:{type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
  },{
    toJSON:{
      virtuals: true
    },
    toObject:{
      virtuals: true
    },
    timestamps:true
  }
);

export const ItemModel = model<Medicine>('item',ItemSchema);
