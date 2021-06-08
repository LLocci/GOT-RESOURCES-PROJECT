import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './characters/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail.component';
import { BookComponent } from './books/book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // needed for ngModel
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookDetailsComponent } from './books/book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
