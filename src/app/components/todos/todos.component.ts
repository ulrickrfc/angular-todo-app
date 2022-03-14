import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Array<String>=[]
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo:string){
    this.todos.push(todo)
  }
}
