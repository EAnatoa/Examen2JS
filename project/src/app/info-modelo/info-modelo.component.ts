import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../Servicios/usuario.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Pokemons, Maestro} from "../home/home.component";
@Component({
  selector: 'app-info-modelo',
  templateUrl: './info-modelo.component.html',
  styleUrls: ['./info-modelo.component.css']
})
export class InfoModeloComponent implements OnInit  {

  hijos;
pokemons;
urlHijos='http://localhost:1337/Maestro?nombres=Estefania';
urlPokemons= 'http://localhost:1337/Pokemon?nombrePokemon=Chicorita';
contador=this._usuarioService.contador;
totalCompra=this._usuarioService.total;
constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
}

ngOnInit() {
  this.http.get<Pokemons>(this.urlPokemons).subscribe((data: Pokemons) => {
    this.pokemons = data;
    console.log('modeloooo '+data.nombrePokemon);

  });
  this.http.get<Maestro>(this.urlHijos).subscribe((data: Maestro) => {
    this.hijos = data;
    console.log('modeloooo '+data.numeroMedalla);

  });
  this.escucharCambiosAuto();
}

escucharCambiosAuto() {
  this._usuarioService.emitircambioAuto.subscribe((pokemons) => {
    this.contador = pokemons;
  });
}

}

