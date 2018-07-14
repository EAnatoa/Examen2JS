import { Component, OnInit } from '@angular/core';
import {Pokemons, Maestro} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-info-hijos',
  templateUrl: './info-hijos.component.html',
  styleUrls: ['./info-hijos.component.css']
})
export class InfoHijosComponent implements OnInit {

  pokemons:Maestro;
  urlPokemons= 'http://localhost:1337/Maestro?nombres=Erika';
  constructor(private http: HttpClient, private  usuarioService: UsuarioService) { }

  ngOnInit() {
    this.http.get<Maestro[]>(this.urlPokemons).subscribe((data:Maestro[]) => {
      this.pokemons = data[this.usuarioService.indiceSeleccionado];
    });
  }

}
