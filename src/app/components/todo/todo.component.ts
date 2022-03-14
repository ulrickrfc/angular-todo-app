import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
@Input() content:String = ''
@Input() id:any = 0
@Output() removeTodo: EventEmitter<any> = new EventEmitter()
  constructor() { }
  Classes= ''
  isChecked = false
  colorType:String = ""

  ngOnInit(): void {
    if(this.id%2==0){
      this.colorType = 'black'
      console.log('sim')
    } else {
      this.colorType = 'blue'
    }

  }

  handleClick(){
    this.removeTodo.emit()
  }
  
  toggleChecked(){
    this.isChecked = !this.isChecked
    console.log(this.isChecked)
    if(!this.isChecked){
      this.Classes = ""
    } else {
      this.Classes = 'checked'
    }
  }

}
