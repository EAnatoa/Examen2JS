import { Component, OnInit } from '@angular/core';
import {Pokemons, Maestro} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsuarioService} from "../Servicios/usuario.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-atributo-papa',
  templateUrl: './atributo-papa.component.html',
  styleUrls: ['./atributo-papa.component.css']
})
export class AtributoPapaComponent implements OnInit {
 pokemons:Pokemons[];
  hijos;
  urlPokemons= 'http://localhost:1337/Pokemon?nombrePokemon=Pikachu';
  urlHijos='http://localhost:1337/Maestro?nombres=Erika&apellidos=Anatoa';
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {
    this.http.get<Pokemons[]>(this.urlPokemons).subscribe((data: Pokemons[]) => {
      this.pokemons = data;
      console.log(this.pokemons.map(datos=>datos.nombrePokemon));

    });

    this.getAutos().subscribe(data => {
        this.hijos = data;
        console.log('nombre ' + this.hijos.nombres);
      },
      err => {
        console.log(err)
      }
    );
  }

  getAutos(): Observable<Maestro> {
    return this.http.get<Maestro>(this.urlHijos);
  }

  seleccionar(index){
    this._usuarioService.setIndice(index)
  }


}
