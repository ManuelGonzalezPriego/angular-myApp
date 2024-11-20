import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public nombresHeroes:string[]=['Goku','Vegeta','Picolo','Trunks'];

  public heroeEliminado?: string;

  public eliminaUltimoHero():void{
    this.heroeEliminado=this.nombresHeroes.pop();
  }
}
