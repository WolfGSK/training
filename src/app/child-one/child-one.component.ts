import { Component } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {
  innerText = 'displayed text';
  text = []
  color;

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
  
  getColor(pallet) {
      console.log(pallet)
    if (pallet <= 0){ 
      return 'red' 
    }else if (pallet < 1){
      return 'blue'
    }else if (pallet < 2){
      return 'yellow'
    }else if (pallet < 3){
      return 'green'
    }else if (pallet < 4){
      return 'purple'
    }else if (pallet < 5){
      return 'black'
    }else if (pallet < 6){
      return 'cyan'
    }else if (pallet < 7){
      return 'grey'
    }else if (pallet < 8){
      return 'lightblue'
    }else if (pallet < 9){
      return 'orange'
    }
  }
}
