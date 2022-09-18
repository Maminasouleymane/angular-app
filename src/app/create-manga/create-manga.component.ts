import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MangaService } from '../manga.service';
import { manga } from '../manga';

@Component({
  selector: 'app-create-manga',
  templateUrl: './create-manga.component.html',
  styleUrls: ['./create-manga.component.css', './../update-manga/update-manga.component.css']
})
export class CreateMangaComponent implements OnInit {

  // @ts-ignore
  createForm: FormGroup;
  // @ts-ignore
  newManga: manga = {};

  options = ['Shonen', 'Seinen', 'Adventure', 'Horror', 'Sport', 'Others']
  constructor(private mangaService: MangaService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.createForm = new FormGroup({
      'name': new FormControl(null),
      'author': new FormControl(null),
      'genre': new FormControl(null),
      'note': new FormControl(null),
    })
  }

  onCreate(){
    this.newManga.name = this.createForm.get('name')?.value; 
    this.newManga.author = this.createForm.get('author')?.value; 
    this.newManga.genre = this.createForm.get('genre')?.value; 
    this.newManga.note = this.createForm.get('note')?.value; 

    this.mangaService.addMangaFromApi(this.newManga);
  }
}
