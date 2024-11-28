import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interface/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje>=new EventEmitter();



  public personaje:Personaje={
    nombre: '',
    fuerza: 0
  };

  public addPersonaje(): void{
    console.log(this.personaje);

    if(this.personaje.nombre.length===0)return;

    this.onNewPersonaje.emit(this.personaje);

    this.personaje.nombre=""
    this.personaje.fuerza=0
  }
}
