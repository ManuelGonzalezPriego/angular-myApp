import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interface/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  //Este es el imput que sera el que reciva los datos de el main page, esto lo usamos para que luego lo podamos,
  //mostrar en lista.component.html... Este recibe del modulo padre
  @Input()
  public listaPersonajes:Personaje[]=[{
    nombre:"Trunls",
    fuerza:3500
  }]

  //Esta es el output de del personaje con un evento que va e emitir la modificación de la lista,
  //Este emitira el objeto iterado

  @Output()
  public onDelPersonaje: EventEmitter<string>=new EventEmitter();

  public dellPersonaje(personaje:Personaje):void{
    console.log(personaje);
    this.onDelPersonaje.emit(personaje.id);
  }

}
