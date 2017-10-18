import { Component, OnInit } from '@angular/core';

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
  jumpTime: number = 0;
  timeLL: number = 0;
  timeUL: number = 86400;


  constructor() { }

  ngOnInit() {
    this.rep = 0;
    this.timeoutHandler = 0;

    this.rangeVal = 50;
    this.jumpVal = this.baseJumpVal = 1;

    this.timeInSec = 3661
    this.jumpTime = this.baseJumpTime = 1;
    this.updateTime();
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
        else
          this.jumpTime *= 2;
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
        else
          this.jumpTime *= 2;
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
    this.updateTime();
  }

  updateTime(){
    this.timeToDisp = [ Math.floor(this.timeInSec/3600), Math.floor((this.timeInSec%3600)/60), Math.floor((this.timeInSec%3600)%60) ];
  }

  resetOnMouseUp(){
    if(this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.jumpVal = this.baseJumpVal;
      this.jumpTime = this.baseJumpTime;
      this.rep = 0;
      this.timeoutHandler = 0;
    }
  }

  increment(idX){
    if(idX == 0){
      if(this.rangeVal + this.jumpVal >= this.rangeUL)
        this.rangeVal = this.rangeUL;
      else
        this.rangeVal += this.jumpVal;
    }
    else if(idX == 1){
      if(this.timeInSec + this.jumpTime >= this.timeUL)
        this.timeInSec = this.timeUL;
      else
        this.timeInSec += this.jumpTime;
      this.updateTime();
    }
  }

  decrement(idX){
    if(idX == 0){
      if(this.rangeVal - this.jumpVal <= this.rangeLL)
        this.rangeVal = this.rangeLL;
      else
        this.rangeVal -= this.jumpVal;
    }
    else if(idX == 1){
      if(this.timeInSec - this.jumpTime <= this.timeLL)
        this.timeInSec = this.timeLL;
      else
        this.timeInSec -= this.jumpTime;
      this.updateTime();
    }
  }
}
