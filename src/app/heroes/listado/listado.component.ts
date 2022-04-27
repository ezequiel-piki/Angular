import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

heroes: string [] = ['Batman','Spiderman','Antman','Superman','Bati-chica','Chapulin Colorado']
heroeBorrado:string[] =[];
borrarHeroe (){
  this.heroeBorrado = this.heroes.splice(-1,1);
}

}
