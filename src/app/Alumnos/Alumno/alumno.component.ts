import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contador } from '../../contador/components/contador.components';

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

  public eliminarCentro(){
    //Con esto obtnemos el indice de el objeto (su número para ser mas claros)
    let centro=this.centros[this.contador];
    if(centro!==null){
      this.pila.push(centro);
      //Con splice indicamos que borre el objeto que esta en el indice que hemos obtenído con anterioridad y le diremos que solo querémos borrar 1 con el número del final
      this.centros.splice(this.contador,1);

      if (this.contador>0) {
        this.contador--;
      }
    }
  }

  public restaurarCentro(){
    const longitudPila=this.pila.length;
    if(longitudPila>0){
      //El esplice me deja insertar en la lista un elemento en la posición que yo quiera ademas de indicarle si quiero borrar algo de la lista
      // Cuanoo haga esto
      // Ademas haremos un pop para sacar el primer elemento de la pila
      // Por ultimo para ver que hemos eliminado pondremos que nos de el el objeto en la posición 0
      if(this.centros.length>0){
        this.centros.splice(this.contador,0,this.pila.pop()!);
      }else{
        //Esto lo tenemos que hacer ya que el contador se descordina
        this.centros.push(this.pila.pop()!)
        this.contador=0;
      }
    }
  }

  // Otra forma mejro hecha
  //* anterior(){
  //*   this.indice=(this.indice-1 + this.array.length) % this.array.length;
  //* }

  //* siguiente(){
  //*   this.indice=(this.indice+1) % this.array.length;
  //* }
  siguiente(){
    this.contador=(this.contador+1) % this.centros.length;
  }

  anterior(){
    this.contador=(this.contador-1 + this.centros.length) % this.centros.length;
  }

}
