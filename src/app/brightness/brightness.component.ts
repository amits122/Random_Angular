import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brightness',
  templateUrl: './brightness.component.html',
  styleUrls: ['./brightness.component.css']
})

export class BrightnessComponent implements OnInit {

  blur: number = 40;
  size: number = 10;

  constructor() { 
  }

  ngOnInit() {
  }

  onChangeSlider(idX){
    this.blur = 40 - 0.2 * idX;
    this.size = 10 + 0.2 * idX;
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