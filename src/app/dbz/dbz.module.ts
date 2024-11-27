import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./pages/main-page.component";
import { ListaComponent } from "./components/lista/lista.component";
import { PersonajeComponent } from "./components/personaje/personaje.component";


@NgModule({
  declarations:[MainPageComponent,ListaComponent,PersonajeComponent],
  imports:[CommonModule],
  exports:[MainPageComponent]
})
export class DbzModule {}
