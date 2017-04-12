import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MdIconModule, MdSnackBarModule, MdInputModule, MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';



const appRoutes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoComponent },
  { path: '',   redirectTo: '/todos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule,
    MdIconModule,
    MdSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
