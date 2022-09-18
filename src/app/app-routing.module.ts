import { RouterModule, Routes } from '@angular/router';

import { CreateMangaComponent } from './create-manga/create-manga.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { NgModule } from '@angular/core';
import { UpdateMangaComponent } from './update-manga/update-manga.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'manga-list', component: MangaListComponent},
  {path: 'add', component: CreateMangaComponent},
  {path: 'update/:id', component: UpdateMangaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
