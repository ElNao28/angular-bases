import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'iron-man';
  public age:number = 40;

  get capitalizacion():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName():void{
    this.name = 'spiderman';
  }

  changeAge():void{
    this.age = 25;
  }
  resetForm():void{
    this.name = 'iron-man';
    this.age = 40;
  }
}
