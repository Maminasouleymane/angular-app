import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateMangaComponent } from './update-manga/update-manga.component';
import { CreateMangaComponent } from './create-manga/create-manga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MangaListComponent,
    UpdateMangaComponent,
    LandingPageComponent,
    CreateMangaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
