import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
  <hr>
  <h3>Contador: {{constador}}</h3>
  <button (click)="incrementarPor()">+{{X}}</button>
  <button (click)="reset()">0</button>
  <button (click)="disminuirPor()">-{{X}}</button>
  `,
  standalone: false
})
export class Contador {
  public X=1;
  public title:string = 'A llorar a la llorería';
  public constador:number=0;

  incrementarPor():void{
    this.constador+=this.X;
  }

  reset():void{
    this.constador=0;
  }
  disminuirPor():void{
    this.constador-=this.X;
  }
}
