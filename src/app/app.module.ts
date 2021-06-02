import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './characters/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail.component'; // needed for ngModel

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
