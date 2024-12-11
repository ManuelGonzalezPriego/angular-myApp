import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./pages/main-page.component";
import { ListaComponent } from "./components/lista/lista.component";
import { PersonajeComponent } from "./components/personaje/personaje.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations:[MainPageComponent,ListaComponent,PersonajeComponent],
  imports:[CommonModule,FormsModule],
  exports:[MainPageComponent]
})
export class DbzModule {}
