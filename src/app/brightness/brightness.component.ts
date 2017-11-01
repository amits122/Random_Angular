import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material';

import { BrightnessService } from '../services/brightness.service';

@Component({
  selector: 'app-brightness',
  templateUrl: './brightness.component.html',
  styleUrls: ['./brightness.component.css']
})
export class BrightnessComponent implements OnInit {

  opaque: number;

  constructor(private brightnessServiceOnBr: BrightnessService) { 
  }

  ngOnInit() {
    this.opaque = this.brightnessServiceOnBr.brightnessVar;
  }

  onChangeSlider(idX){
    this.opaque = idX;
    this.brightnessServiceOnBr.brightnessVar = this.opaque;
    
  }

  getStyles(){
    var str1 = "0px 0px ";
    str1 += this.opaque * 1.2 + "px " + this.opaque * 0.6 + "px" + " #fff";
    console.log(str1)
    let myStyle={
      'box-shadow' : str1
    }
    return myStyle;
  }

}
