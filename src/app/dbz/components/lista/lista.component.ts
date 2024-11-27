import { Component, Input } from '@angular/core';
import { Personaje } from '../../interface/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public listaPersonajes:Personaje[]=[{
    nombre:"Trunls",
    fuerza:3500
  }]
}
