import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export class Centro{
  public contador=0;

  public nombre:string;
  public localidad:string;
  public familiaProf:string;
  public familiaProfs:string[];
  public logo:string;

  constructor(nombre:string,localidad:string,familiaProfs:string[],logo:string){
    this.nombre=nombre;
    this.localidad=localidad;
    this.familiaProfs=familiaProfs;
    this.familiaProf=familiaProfs[this.contador];
    this.logo=logo
  }

  public cambiarFamiliaProf(){
    if(this.contador<this.familiaProfs.length-1){
      this.contador++;
      this.familiaProf=this.familiaProfs[this.contador];
    }
    else{
      this.contador=0;
      this.familiaProf=this.familiaProfs[this.contador];
    }
  }
}

@Component({
  selector: 'app-Alumnos-alumno',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
})

export class AlumnoComponent {

  public contador:number=0;
  public familiaProfs:string[]=["Informática y Comunicaciones","Transporte","Mantenimiento"];

  public familiaProfs2:string[]=["Hostelería","Turismo"];

  public centros:Centro[]=[new Centro("IES Playamar","Torremolinos",this.familiaProfs,"assets/iesPlayamar.png"),new Centro("IES Sisoy","NoCe",this.familiaProfs2,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfHP4TV5UGGTNh1sKWJkFZfTjSvc70-55LEFZYrdmbJ1TenuWAarO45xYR2fnPeDJgbc&usqp=CAU"),new Centro("IES Jacaranda","Churriana",this.familiaProfs2,"assets/insti2.png")];

  public pila:Centro[]=[];

  public centro:Centro=this.centros[this.contador];

  public eliminarCentro(){
    //Con esto obtnemos el indice de el objeto (su número para ser mas claros)

    let centro=this.centros.indexOf(this.centro);

    if(centro!==-1){
      this.pila.push(this.centro);
      //Con splice indicamos que borre el objeto que esta en el indice que hemos obtenído con anterioridad y le diremos que solo querémos borrar 1 con el número del final
      this.centros.splice(centro,1);
      this.cambiarCentro("+");
    }
    else if(this.centro==null){
      this.contador=0;
    }
  }

  public restaurarCentro(){
    const longitudPila=this.pila.length;
    if(longitudPila>0){
      //El esplice me deja insertar en la lista un elemento en la posición que yo quiera ademas de indicarle si quiero borrar algo de la lista
      // Cuanoo haga esto
      // Ademas haremos un segundo splice que eliminara el objeto en la posición del medio esto lo hcemos dividiendo la longitud entre 2 y redondeando hacia ablajo con floor
      // Por ultimo para ver que hemos eliminado pondremos que nos de el el objeto en la posición 0
      this.centros.splice(this.contador,0,this.pila.splice(Math.floor(longitudPila/2),1)[0]);
      this.centro=this.centros[this.contador];
    }
  }

  public cambiarCentro(signo:string){
    if(signo==="+"){
      if(this.contador<this.centros.length-1){
        this.contador++;
      }
      else{
        this.contador=0;
      }
    }else{
      if(this.contador>0){
        this.contador--;
      }
      else{
        this.contador=this.centros.length-1;
      }
    }

    if(this.contador==-1){
      this.contador=0;
    }
    this.centro=this.centros[this.contador];
  }

}
