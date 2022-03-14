import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  input = ""

  constructor() { }

  ngOnInit(): void {
  }
  
  handleInput(e:any){
    this.input = e.target.value
  }

  addTodo(){
    
  }

}
