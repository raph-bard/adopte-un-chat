import { Component } from '@angular/core';
import { Cat } from './class/cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adopte-un-chat';

  sendNewCatToParent(cat : Cat) {
    this.catList.push(cat);

  }

  catList: Cat[] = [
    {
      name: "Lalou",
      breed: "Chat de gouttière",
      birthDate: "23/12/2021",
      imgUrl: "https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg",
    },
    {
      name: "Kiki",
      breed: "Chat de gouttière",
      birthDate: "07/03/2008",
      imgUrl: "https://www.everland-petfood.com/wp-content/uploads/AdobeStock_203576107.jpeg",
    }
  ]

  userCatList : Cat[] = [
    {
      name: "Milla",
      breed: "Chat",
      birthDate: "30/05/2015",
      imgUrl: "https://www.assuropoil.fr/wp-content/uploads/2021/09/chat-de-gouttiere-race.jpeg"

    }
  ]

  giveCatToUser(cat : Cat, index: number) {
    this.userCatList.push(this.catList.splice(index, 1)[0]);
  }
}
