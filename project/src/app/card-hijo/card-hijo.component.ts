import { Component, OnInit } from '@angular/core';
import {Pokemons, Maestro} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-card-hijo',
  templateUrl: './card-hijo.component.html',
  styleUrls: ['./card-hijo.component.css']
})
export class CardHijoComponent implements OnInit {
  pokemons: Pokemons[];
  constructor(private http: HttpClient, private _usuarioservice:UsuarioService) {
  }

  ngOnInit() {
    this.mostrar();
  }

  mostrar(){
    this.http.get<Pokemons[]>(this._usuarioservice.urlnuevaHijos).subscribe((data: Pokemons[]) => {
      this.pokemons = data;

    });
  }


}
