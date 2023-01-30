import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  columnas: string[] = ["codigo","descripcion","precio", "borrar"];

  datos: Producto[] = [new Producto(1, 'papas', 55),
  new Producto(2, 'manzanas', 53),
  new Producto(3, 'naranjas', 25),];

  productoMostrar: Producto = new Producto(0, "", 0);


  @ViewChild(MatTable) tabla1!: MatTable<Producto>;
  
  borrarFila(cod: number){
    if(confirm("Esta eliminando")){
    this.datos.splice(cod,1);
    this.tabla1.renderRows();
    }
  }

  agregar(){
    this.datos.push(new Producto(this.productoMostrar.codigo,
      this.productoMostrar.descripcion,
      this.productoMostrar.precio));
    this.tabla1.renderRows();
    this.productoMostrar = new Producto(0,"",0);
  }
}

export class Producto {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}



