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

  hijos:Maestro;
  pokemons:Pokemons;
  urlHijos='http://localhost:1337/Maestro?nombres=Erika&apellidos=Anatoa';
  urlPokemons= 'http://localhost:1337/Pokemon?nombrePokemon=Pikachu&id=1';
  contador=this._usuarioService.contador;
  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.http.get<Pokemons>(this.urlPokemons).subscribe((data: Pokemons) => {
      this.pokemons = data[0];
      console.log('************INFO-MODELO-COMPONENT****'+data.nombrePokemon);
    });
    this.http.get<Maestro[]>(this.urlHijos).subscribe((data:Maestro[]) => {
      this.hijos = data[0];
    });

  }


}

