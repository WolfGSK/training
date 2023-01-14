import { Component } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {
  innerText = 'displayed text';
  text = []
  colors = ['red','yellow', 'green', 'blue'];

  btnReset() {
    this.innerText ="";
  }

  onGenerate() {
    this.text.push(this.innerText);
  }

  onDestroyFirst() {
    this.text.splice(0,1);
  }

  onDestroylast() {
    this.text.splice(this.text.length-1)
  }
  
  getColor() {
    var index = Math.floor(Math.random() * this.colors.length)
    return this.colors[index];
  }
}
