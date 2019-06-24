import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingPipesPipe } from '../pipes/sorting-pipes.pipe';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AddTodoComponent } from './components/pages/add-todo/add-todo.component';
import { EditComponent } from './components/pages/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingPipesPipe,
    AboutComponent,
    HomeComponent,
    TodoCardComponent,
    NavbarComponent,
    AddTodoComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }