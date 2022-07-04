import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_items, sample_tags } from 'src/data';
import { ITEMS_BY_ID_URL, ITEMS_BY_SEARCH_URL, ITEMS_BY_TAG_URL, ITEMS_TAGS_URL, ITEMS_URL } from '../shared/constants/urls';
import { Medicine } from '../shared/models/Medicine';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(ITEMS_URL);
  }

  getAllItemsBySearchTerm(searchTerm:string){
    return this.http.get<Medicine[]>(ITEMS_BY_SEARCH_URL + searchTerm)
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(ITEMS_TAGS_URL);
  }

  getAllItemsByTag(tag:string):Observable<Medicine[]>{
    return tag === "All"?
    this.getAll():
    this.http.get<Medicine[]>(ITEMS_BY_TAG_URL + tag);
  }

  getItemById(itemId:string):Observable<Medicine>{
    return this.http.get<Medicine>(ITEMS_BY_ID_URL + itemId)
  }
}
