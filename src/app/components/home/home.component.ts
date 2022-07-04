import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MedicineService } from 'src/app/services/medicine.service';
import { Medicine } from 'src/app/shared/models/Medicine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Medicine[] = [];

  constructor(private itemService: MedicineService, activatedRoute:ActivatedRoute) {
    let itemsOberservable:Observable<Medicine[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        itemsOberservable = this.itemService.getAllItemsBySearchTerm(params.searchTerm);
      }
      else if(params.tag){
        itemsOberservable = this.itemService.getAllItemsByTag(params.tag);
      }
      else{
        itemsOberservable = itemService.getAll();

      }
      itemsOberservable.subscribe((serverItems) =>{
        this.items = serverItems;
      })

    })
   }

  ngOnInit(): void {
  }

}
