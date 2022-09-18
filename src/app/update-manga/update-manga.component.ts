import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpEvent, HttpResponse } from '@angular/common/http';

import { MangaService } from '../manga.service';
import { manga } from '../manga';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.component.html',
  styleUrls: ['./update-manga.component.css']
})
export class UpdateMangaComponent implements OnInit {

  mangaGenres = ['Shonen', 'Seinen', 'Adventure', 'Horror', 'Sport', 'Others']
  updateMangaForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private mangaService: MangaService, private router: Router) { }

  // @ts-ignore
  currentManga: manga = {};
  theId: number  =this.route.snapshot.params["id"]; 
  ngOnInit() {
    this.updateMangaForm = new FormGroup({
      'name': new FormControl(null),
      'author': new FormControl(null),
      'genre': new FormControl(null),
      'note': new FormControl(null),
    })

    this.currentManga = this.mangaService.getById(this.theId)
  
      this.updateMangaForm.controls['name'].patchValue(this.currentManga.name); 
      this.updateMangaForm.controls['author'].patchValue(this.currentManga.author); 
      this.updateMangaForm.controls['genre'].patchValue(this.currentManga.genre); 
      this.updateMangaForm.controls['note'].patchValue(this.currentManga.note); 
  }

  updateForm(){
    this.currentManga.name = this.updateMangaForm.get('name')?.value; 
    this.currentManga.author = this.updateMangaForm.get('author')?.value; 
    this.currentManga.genre = this.updateMangaForm.get('genre')?.value; 
    this.currentManga.note = this.updateMangaForm.get('note')?.value; 

    this.mangaService.updateManga(this.theId, this.currentManga)
        this.router.navigate(['/manga-list'])  
  }

}
