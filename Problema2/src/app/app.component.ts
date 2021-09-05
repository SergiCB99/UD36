import { unescapeIdentifier } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista';

  codigo_usuario=0;
  descripcion_usuario='';
  precio_usuario=0;

  datos = [
    {
        "codigo": 1,
        "descripcion": "papas",
        "precio": 10.55
    },
    {
      "codigo": 2,
      "descripcion": "manzanas",
      "precio": 12.1
    },
    {
      "codigo": 3,
      "descripcion": "melon",
      "precio": 52.3
    },
    {
      "codigo": 4,
      "descripcion": "cebollas",
      "precio": 17
    },
    {
      "codigo": 5,
      "descripcion": "calabaza",
      "precio": 20
    }];

    borrar(codigo: any){

      for(var x=0;x<=this.datos.length;x++){

        if(this.datos[x].codigo==codigo){
          delete this.datos[x];
        }

      }

    }

    seleccionar(codigo: any){

      for(var x=0;x<=this.datos.length;x++){

        if(this.datos[x].codigo==codigo){
          this.codigo_usuario=this.datos[x].codigo;
          this.descripcion_usuario=this.datos[x].descripcion;
          this.precio_usuario=this.datos[x].precio;
        }

      }

    }

    anadir(){

      this.datos.push({

        "codigo": this.codigo_usuario,
        "descripcion": this.descripcion_usuario,
        "precio": this.precio_usuario

      });

    }

    modificar(){
      for(var x=0;x<=this.datos.length;x++){

        if(this.datos[x].codigo==this.codigo_usuario){

          this.datos[x].descripcion=this.descripcion_usuario;
          this.datos[x].precio=this.precio_usuario;

        }
      }
    }

    mostrarArray(){

      for(var x=0;x<=this.datos.length;x++){

        console.log(this.datos[x]);

      }
    }

}
