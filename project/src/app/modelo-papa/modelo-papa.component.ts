import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsuarioService} from "../Servicios/usuario.service";
import {Pokemons, Maestro} from "../home/home.component";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-modelo-papa',
  templateUrl: './modelo-papa.component.html',
  styleUrls: ['./modelo-papa.component.css']
})
export class ModeloPapaComponent implements OnInit {
  pokemons: Pokemons;
  contador=this._usuarioService.contador;
  totalCompra = this._usuarioService.total;
  visible=false;
  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
  }

  ngOnInit() {
    if(this._usuarioService.indiceHijos===2){
      this.visible=false;

    }else{
      this.escucharCambiosAuto();
    }
  }



  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((pokemons) => {
      this.contador = pokemons;
    });
  }

  seleccionar(){
    this.contador++;
    this.totalCompra=this.totalCompra+50;
    this._usuarioService.colocarTotal(this.totalCompra);
    this._usuarioService.emitirCambio(this.contador);
  }
}
