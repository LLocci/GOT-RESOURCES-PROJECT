import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list.component';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './characters/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail.component';


const routes: Routes = [
    { path: 'books', component: BookListComponent },
    { path: 'characters', component: CharacterListComponent },
    { path: 'characters/:id', component: CharacterDetailComponent},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
