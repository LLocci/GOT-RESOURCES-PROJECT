import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; // needed for ngModel

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'books', component: BookListComponent },
      { path: 'home', component: HomeComponent },
      {path: '', redirectTo: 'home', pathMatch : 'full'}
    ],{useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
