import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: Pokemons;
  contador=this._usuarioService.contador;
  user;
  ngOnInit(){
    this.escucharCambiosAuto();
    this.user=this.cookieService.get('user');
  }

  constructor(private http: HttpClient, private _usuarioService:UsuarioService, private cookieService: CookieService) {
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((pokemons) => {this.contador= pokemons;
      console.log(this.contador)
    });

  }
}
export interface Pokemons{
  nombrePokemon: string,
  fechaCaptura: string
  numeroPokemon: number,
  poderUno:string,
  poderDos: string,
  nivel: number,
  maestroIdFK:number
  id:number
  maestro: Maestro[];
}
export interface Maestro {
  nombres: string,
  apellidos: string,
  fechaNacimiento: string,
  numeroMedalla: number,
  id:number
  campeonActual:boolean
}
