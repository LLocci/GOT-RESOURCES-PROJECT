import { Routes } from "@angular/router";
import { BookListComponent } from "./books/book-list.component";
import { CharacterDetailComponent } from "./characters/character-detail.component";
import { CharacterListComponent } from "./characters/character-list.component";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
    { path: 'books', component: BookListComponent },
    { path: 'characters', component: CharacterListComponent },
    { path: 'characters/:id', component: CharacterDetailComponent},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch : 'full'}
];
