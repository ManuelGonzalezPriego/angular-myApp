import { Contador } from './contador/components/contador.components';
import { Component } from '@angular/core';
import { AlumnoComponent } from "./Alumnos/Alumno/alumno.component";
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeroesModule,ContadorModule, AlumnoComponent, DbzModule]
})
export class AppComponent {
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
