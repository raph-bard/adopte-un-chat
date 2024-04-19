import { Component, Input } from '@angular/core';
import { Cat } from '../../class/cat';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.scss'
})
export class UserKittenComponent {

  @Input()
  cat! : Cat; 

}
