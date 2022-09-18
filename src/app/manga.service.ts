import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { manga } from './manga';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  
  BASE_URL = 'http://localhost:8080/manga';
  mangaList: manga [] = [
    {name: 'JOJO', author: 'Araki', genre: 'shoenen', note: 'masterpiece'},
    {name: 'REAL', author: 'Enoue', genre: 'seinen', note: 'masterpiece'},
  ]

  constructor(private http: HttpClient, private router: Router) { }

  getMangaFromApi(){
    return this.http.get< manga []>('http://localhost:8080/manga')
      // return this.mangaList
  }
 
  getAll(){
    // console.log(this.testApi())
    return this.mangaList;
  }

  deleteManga(index: number){
    return this.mangaList.splice(index, 1);
  }

  updateManga(index: number){
    return this.mangaList.map((manga, i) => {
      return (i === index) ? {...manga, name: 'legendary'} : manga ;
    } )
  }

  addMangaFromApi(manga : manga) {
    return this.http.post(`${this.BASE_URL}`, manga, {responseType: 'text'}).subscribe((response) =>{
      if(response === 'created') {
        this.router.navigate(['/manga-list'])
      }
      // console.log(response);
    })
  }
  getById(id: string){
    return this.http.get<manga>(`http://localhost:8080/manga/${id}`)
  }

  deleteMangaFromApi(id : number){
    return this.http.delete(`${this.BASE_URL}/${id}`, {responseType: 'text'}).subscribe((response) =>{
      if(response === 'deleted') {
        // ! reload the component
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/manga-list'])
        })
      }
  })
}

  updateMangaFromApi(id: string, updates: manga){
   return this.http.patch(`${this.BASE_URL}/${id}`, updates, {responseType: 'text'})
  }
}
