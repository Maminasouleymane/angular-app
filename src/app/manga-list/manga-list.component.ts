import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { manga } from '../manga';
import { MangaService } from '../manga.service';

const manga: manga [] = [
  {name: 'JOJO', author: 'Araki', genre: 'shoenen', note: 'masterpiece'},
  {name: 'REAL', author: 'Enoue', genre: 'seinen', note: 'masterpiece'},
]

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})

export class MangaListComponent implements OnInit {

  availableManga: manga[] = []
  constructor(private managaService: MangaService, private router: Router) { }

  ngOnInit() {
    this.managaService.getMangaFromApi().subscribe((result) => {
      this.availableManga = result
    })
  }

  onDelete(id: any) {
    // this.managaService.deleteManga(id);
    this.managaService.deleteMangaFromApi(id)
    // console.log(this.managaService.deleteMangaFromApi(id))
  }
  onUpdate(index: number) {
    this.availableManga = [...this.managaService.updateManga(index)]
    console.log(this.managaService.updateManga(index))
  }

  onNavigateToUpdatePage(page: any ) {
    // console.log(this.router.navigate([`/update/${page.toString}`]))
    this.router.navigate([`/update/${page}`])
  }
}
