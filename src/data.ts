import { Medicine } from "./app/shared/models/Medicine";
import { Tag } from "./app/shared/models/Tag";

export const sample_items: Medicine [] = [
  {
    id:'1',
    name:'Paracetamol',
    price: 10,
    tags:['Fever','Cold','Cough'],
    age:'5+',
    expiryDate:'07-2023',
    description:'Can be used for Fever, Cold and Cough',
    imageUrl:'assets/item-1.jpg',


  },
  {
    id:'2',
    name:'Cetirizine',
    price: 15,
    tags:['Cough','Cold'],
    age:'5+',
    expiryDate:'05-2023',
    description:'Can be used for Cough and Cold',
    imageUrl:'assets/item-2.jpg'
  },
  {
    id:'3',
    name:'Diazepam',
    price: 20,
    tags:['Painkiller'],
    age:'10+',
    expiryDate:'09-2023',
    description:'Can be used as a Painkiller',
    imageUrl:'assets/item-3.jpg'
  },
  {
    id:'4',
    name:'Acetaminophen',
    price: 25,
    tags:['Painkiller'],
    age:'8+',
    expiryDate:'05-2023',
    description:'Can be used as a painkiller',
    imageUrl:'assets/item-4.jpg'
  },
  {
    id:'5',
    name:'Dolo 650',
    price: 20,
    tags:['Fever','Headache'],
    age:'5+',
    expiryDate:'05-2023',
    description:'Can be used for Fever and Headache',
    imageUrl:'assets/item-5.jpg'
  },
  {
    id:'6',
    name:'Ibuprofen',
    price: 25,
    tags:['Headache'],
    age:'10+',
    expiryDate:'05-2023',
    description:'Can be used for Headache',
    imageUrl:'assets/item-6.jpg'
  },
  {
    id:'7',
    name:'Amoxicillin',
    price: 15,
    tags:['Antibiotics'],
    age:'5+',
    expiryDate:'08-2023',
    description:'Can be used as an Antibiotic',
    imageUrl:'assets/item-7.jpg'
  },
  {
    id:'8',
    name:'Doxycycline',
    price: 35,
    tags:['Antibiotics'],
    age:'8+',
    expiryDate:'11-2023',
    description:'Can be used as an Antibiotic',
    imageUrl:'assets/item-8.jpg'
  },
  {
    id:'9',
    name:'Supradyn',
    price: 65,
    tags:['Multi Vitamin'],
    age:'8+',
    expiryDate:'09-2023',
    description:'Can be used for Multi Vitamin ',
    imageUrl:'assets/item-9.jpg'
  }

]

export const sample_tags:Tag[] = [
  {name:'All', count: 9},
  {name:'Cough', count: 2},
  {name:'Cold', count: 2},
  {name:'Fever', count: 2},
  {name:'Headache', count: 2},
  {name:'Antibiotics', count: 2},
  {name:'Multi Vitamin', count: 1}

]
