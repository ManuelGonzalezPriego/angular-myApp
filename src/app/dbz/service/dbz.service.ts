import { Injectable, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService implements OnInit{
  constructor() { }
  public personajes: Personaje[]=[
    {
      id:uuid(),
      nombre:"Goku",
      fuerza:5000
    },
    {
      id:uuid(),
      nombre:"Krilin",
      fuerza:120
    },
    {
      id:uuid(),
      nombre:"Goku",
      fuerza:5000
    },
    {
      id:uuid(),
      nombre:"Krilin",
      fuerza:120
    },
    {
      id:uuid(),
      nombre:"Goku",
      fuerza:5000
    },
    {
      id:uuid(),
      nombre:"Krilin",
      fuerza:120
    },
    {
      id:uuid(),
      nombre:"Goku",
      fuerza:5000
    },
    {
      id:uuid(),
      nombre:"Krilin",
      fuerza:120
    }
  ];

  public onNewPersonaje(personaje:Personaje):void{
    // console.log('MainPage');
    // console.log(personaje);
    const newPersonaje:Personaje={ id:uuid(), ...personaje }
    this.personajes.push(newPersonaje);
  }

  //Creamos el ondelete que borrar en la lista padre el elemento y mediante el imput en el main lo mandaremos al modulo
  //lista
  // public onDelPersonaje(personaje:Personaje):void{
  // console.log('MainPage');
  // console.log(personaje);
  //   const indice:number=(this.personajes.indexOf(personaje));
  //   if(indice!==-1){
  //     this.personajes.splice(indice,1);
  //   }
  // }

  //Con el uso de filter lo que haremos es una copía del array original exceptuando al id que pasamos por referéncia en el metodo
  public deltePersonajeById(id:string):void{
    this.personajes=this.personajes.filter(personaje=>personaje.id!==id); //Si el id de personaje no coincide con el id indicado crea el personaje
                                                                          // y añadelo a la nueva lista si no es así no lo crees... Despues iguale el array original a la copia
  }

  ngOnInit() { }
}
