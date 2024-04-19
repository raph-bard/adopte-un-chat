import { Component, EventEmitter, Output } from '@angular/core';
import { Cat } from '../../class/cat';

@Component({
  selector: 'app-new-cat-form',
  templateUrl: './new-cat-form.component.html',
  styleUrl: './new-cat-form.component.scss'
})
export class NewCatFormComponent {

  newCat: Cat = new Cat();

  @Output() catAdded: EventEmitter<Cat> = new EventEmitter();
  
  sendNewCatToParent() {
    this.catAdded.emit(this.newCat);
    console.log("newCatForm", this.newCat)
  }
}
