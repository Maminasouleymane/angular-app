import { Injectable } from '@angular/core';
import { manga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  
  mangaList: manga [] = [
    {name: 'JOJO', author: 'Araki', genre: 'shoenen', note: 'masterpiece'},
    {name: 'REAL', author: 'Enoue', genre: 'seinen', note: 'masterpiece'},
  ]

  constructor() { }
 
  getAll(){
    return this.mangaList;
  }

  getById(index: any){
    console.log(index)
    return this.mangaList[index]
  }
  deleteManga(index: number){
    return this.mangaList.splice(index, 1);
  }

  updateManga(index: number, updates: manga){
    return this.mangaList.map((manga, i) => {
      return (i === index) ? {...manga, ...updates} : manga ;
    } )
  }

  addNewManga(manga: manga){
    this.mangaList = [...this.mangaList , manga]
    return this.mangaList
  }


}
