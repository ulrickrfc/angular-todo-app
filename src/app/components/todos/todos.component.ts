import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Output() deleteTodoItem: EventEmitter<any> = new EventEmitter()

  todosContent = 'Este é um todo'
  todos:Array<String>=[]
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo:string){
    if(todo !==""){
      this.todos.push(todo)
    }
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
  }
}
