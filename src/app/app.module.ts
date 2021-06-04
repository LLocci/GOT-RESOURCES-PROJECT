import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './books/book-list.component';
import { CharacterDetailComponent } from './characters/character-detail.component'; // needed for ngModel
import { CharacterListComponent } from './characters/character-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
