import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brightness',
  templateUrl: './brightness.component.html',
  styleUrls: ['./brightness.component.css']
})

export class BrightnessComponent implements OnInit {

  blur: number = 25;
  size: number = 10;

  constructor() { 
  }

  ngOnInit() {
  }

  onChangeSlider(idX){
    this.blur = 25 - 0.1 * idX;
    this.size = 10 + 0.15 * idX;
  }

  getStyles(){
    let myStyle = {
      'font-size' : this.size+'vw',
      'top' : 'calc(50% - ' + this.size/2+'vw)',
      'left': 'calc(50% - ' + this.size/2+'vw)',
      'filter' : 'blur('+this.blur+'px)' 
    }
    return myStyle;
  }

}