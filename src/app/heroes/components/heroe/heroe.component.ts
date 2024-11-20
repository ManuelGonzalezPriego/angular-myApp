import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent{
  public nombre:string="Goku";
  public edad:number=20;

  public get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  public getdescripcioHeroe():string{
    return `El ${this.nombre} muy ${this.nombre} y mucho goku por que la tierra es de ${this.nombre} y goku mucha tierrra tiene, tiene ${this.edad} anos.`;
  }

  private nombrePrivado():string{
    return "Kakarot";
  }

  public cambiarNombre():void{
    this.nombre=this.nombrePrivado();
  }

  public cambiarEdad():void{
    this.edad=90;
  }

  public reset():void{
    this.edad=20;
    this.nombre="Goku";
  }

}
