import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
