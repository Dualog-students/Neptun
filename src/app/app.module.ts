import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingPipesPipe } from '../pipes/sorting-pipes.pipe';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
<<<<<<< HEAD
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
=======
import { TodoCardComponent } from './todo-card/todo-card.component';
>>>>>>> Now uses todo-card component

@NgModule({
  declarations: [
    AppComponent,
    SortingPipesPipe,
<<<<<<< HEAD
    AboutComponent,
    HomeComponent,
=======
    TodoCardComponent
>>>>>>> Now uses todo-card component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }