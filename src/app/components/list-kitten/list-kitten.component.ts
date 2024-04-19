import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../../class/cat';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {

  @Input()
  cat! : Cat;

  @Output() 
  catAdopt : EventEmitter<Cat> = new EventEmitter(); 

  sendCatToParent(cat : Cat) {
    this.catAdopt.emit(cat);
  }
  
}

