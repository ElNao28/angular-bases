import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{counter}}</p>
    <button (click)="increaseBy('+')" >+1</button>
    <button (click)="reset()" >reset</button>
    <button (click)="increaseBy('-')" >-1</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  public increaseBy( value:string):void{
    if(value == '+')
      this.counter += 1;
    else
      this.counter -= 1;
  }

  public reset():void{
    this.counter = 10;
  }
}
