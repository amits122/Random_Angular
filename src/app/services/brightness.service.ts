import { Injectable } from '@angular/core';

@Injectable()
export class BrightnessService {

  brightnessVar: number;

  constructor() { 
    this.brightnessVar = 50;
  }

}
