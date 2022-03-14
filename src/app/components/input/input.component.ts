import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Output() addTodo: EventEmitter<any> = new EventEmitter()

  input = ""

  constructor() { }

  ngOnInit(): void {
  }
  
  handleInput(e:any){
    this.input = e.target.value
  }

  handleClick(){
    this.addTodo.emit(this.input)
  }

}
