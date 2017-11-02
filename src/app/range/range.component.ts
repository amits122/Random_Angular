import { Component, OnInit } from '@angular/core';

import { BrightnessService } from '../services/brightness.service';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {

  rep: number;
  timeoutHandler: any;
  baseJumpVal: number;
  baseJumpTime: number;

  rangeVal: number;
  jumpVal: number;
  rangeLL: number = 0;
  rangeUL : number = 100;
  
  timeInSec: number;
  timeToDisp : number[];
  jumpTime: number;
  timeLL: number = 0;
  timeUL: number = 86400;

  jumpTime2List = [1, 5, 10, 30, 60, 120, 600, 1200, 1800, 3600];
  jumpTime2: number;
  listVal: number;
  timeToDisp2: number[];
  timeInSec2: number;


  constructor(private brightnessServiceOnRange: BrightnessService) { }

  ngOnInit() {
    this.rep = 0;
    this.timeoutHandler = 0;

    this.rangeVal = this.brightnessServiceOnRange.brightnessVar;
    this.jumpVal = this.baseJumpVal = 1;

    this.timeInSec = 3661
    this.jumpTime = this.baseJumpTime = 1;
    this.updateTime(1);

    this.timeInSec2 = 3600;
    this.listVal = 0; 
    this.jumpTime2 = this.jumpTime2List[this.listVal];
    this.updateTime(2);
  }

  onClickDec(idX){
    this.decrement(idX);
  }

  onMouseDownDec(idX){
    this.timeoutHandler = setInterval(() => {
      if(this.rep == 9){
        this.rep = 0;
        //console.log(this.rep, this.jumpVal)
        if(idX == 0)
          this.jumpVal *= 2;
        else if(idX == 1)
          this.jumpTime *= 2;
        else if(idX == 2 && this.jumpTime2 != 3600)
          this.listVal += 1;
          this.jumpTime2 = this.jumpTime2List[this.listVal];
      }
      this.decrement(idX);
      this.rep += 1;
    }, 100);
  }

  onMouseUpDec(){
    this.resetOnMouseUp();
  }

  onClickInc(idX){
    this.increment(idX);
  }

  onMouseDownInc(idX){
    this.timeoutHandler = setInterval(() => {
      if(this.rep == 9){
        this.rep = 0;
        //console.log(this.rep, this.jumpVal)
        if(idX == 0)
          this.jumpVal *= 2;
        else if(idX == 1)
          this.jumpTime *= 2;
        else if(idX == 2 && this.jumpTime2 != 3600){
          this.listVal += 1;
          this.jumpTime2 = this.jumpTime2List[this.listVal];
        }  
      }
      this.increment(idX);
      this.rep += 1;
    }, 100);
  }

  onMouseUpInc(){
    this.resetOnMouseUp();
  }

  onChangeVal(range){
    this.rangeVal = +range;
  }

  updateTime(idX){
    if(idX == 1)
      this.timeToDisp = [ Math.floor(this.timeInSec/3600), Math.floor((this.timeInSec%3600)/60), Math.floor((this.timeInSec%3600)%60) ];
    else if(idX == 2)
      this.timeToDisp2 = [ Math.floor(this.timeInSec2/3600), Math.floor((this.timeInSec2%3600)/60), Math.floor((this.timeInSec2%3600)%60) ];
    
  }

  resetOnMouseUp(){
    if(this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.jumpVal = this.baseJumpVal;
      this.jumpTime = this.baseJumpTime;
      this.rep = 0;
      this.timeoutHandler = 0;
      this.listVal = 0; 
      this.jumpTime2 = this.jumpTime2List[this.listVal];
    }
  }

  increment(idX){
    if(idX == 0){
      if(this.rangeVal + this.jumpVal >= this.rangeUL)
        this.rangeVal = this.rangeUL;
      else
        this.rangeVal += this.jumpVal;
      this.brightnessServiceOnRange.brightnessVar = this.rangeVal;
    }
    else if(idX == 1){
      if(this.timeInSec + this.jumpTime >= this.timeUL)
        this.timeInSec = this.timeUL;
      else
        this.timeInSec += this.jumpTime;
      this.updateTime(idX);
    }
    else if(idX == 2){
      if(this.timeInSec2 + this.jumpTime2 >= this.timeUL)
        this.timeInSec2 = this.timeUL;
      else
        this.timeInSec2 += this.jumpTime2;
      this.updateTime(idX);
    }
  }

  decrement(idX){
    if(idX == 0){
      if(this.rangeVal - this.jumpVal <= this.rangeLL)
        this.rangeVal = this.rangeLL;
      else
        this.rangeVal -= this.jumpVal;
      this.brightnessServiceOnRange.brightnessVar = this.rangeVal;
    }
    else if(idX == 1){
      if(this.timeInSec - this.jumpTime <= this.timeLL)
        this.timeInSec = this.timeLL;
      else
        this.timeInSec -= this.jumpTime;
      this.updateTime(idX);
    }
    else if(idX == 2){
      if(this.timeInSec2 - this.jumpTime2 <= this.timeLL)
        this.timeInSec2 = this.timeLL;
      else
        this.timeInSec2 -= this.jumpTime2;
      this.updateTime(idX);
    }
  }
}
