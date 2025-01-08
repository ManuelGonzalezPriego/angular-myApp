import { Component } from "@angular/core";
import { DbzService } from "../service/dbz.service";
import { Personaje } from '../interface/personaje.interface';

@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor( private dbzservice: DbzService){}

  get getPersonajes(): Personaje[]{
    return this.dbzservice.personajes;
  }

  public deltePersonajeById(id:string):void{
    this.dbzservice.deltePersonajeById(id);
  }

  public onNewPersonaje(personaje:Personaje):void{
    this.dbzservice.onNewPersonaje(personaje);
  }
}
