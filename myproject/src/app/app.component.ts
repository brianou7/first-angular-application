import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My first application';
  author = 'Brian';
  count = 0;
  imgSource = './../favicon.ico';
  enabled = false;

  addCounter = function (){
    this.count = this.count + 1
  };

  changeState = function (){
    if (this.enabled){
      this.enabled = false;
    }else{
      this.enabled = true;
    }
  }
}
