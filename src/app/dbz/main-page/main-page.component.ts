import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  personajes : Personaje []=[
    {
      nombre:'Goku',
      poder: 15000
  },
   {
     nombre:'Vegeta',
     poder :8500
   }
  ];

  nuevo : Personaje = {
    nombre: 'Yamcha',
    poder:10
  }

  agregarNuevoPersonaje (argumento:Personaje){
    console.log(argumento)
    this.personajes.push(argumento)
  }
}
