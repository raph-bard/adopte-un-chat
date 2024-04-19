import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCatFormComponent } from './components/new-cat-form/new-cat-form.component';
import { FormsModule } from '@angular/forms';
import { ListKittenComponent } from './components/list-kitten/list-kitten.component';
import { UserKittenComponent } from './components/user-kitten/user-kitten.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCatFormComponent,
    ListKittenComponent,
    UserKittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
