import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ListaComponent } from "./components/lista/lista.component";
import { HeroeComponent } from "./components/heroe/heroe.component";

@NgModule({
  declarations:[ListaComponent,HeroeComponent],
  imports:[CommonModule],
  exports:[ListaComponent,HeroeComponent]
})

export class HeroesModule{ }
