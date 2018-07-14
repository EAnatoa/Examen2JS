import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemons, Maestro} from "../home/home.component";
import {UsuarioService} from "../Servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-papa',
  templateUrl: './card-papa.component.html',
  styleUrls: ['./card-papa.component.css']
})
export class CardPapaComponent implements OnInit {
  selccionaAuto:boolean;
  nombre;
  mostrar=false;
  pokemons:Pokemons[];
  maestro:Maestro[];
  nuevaUrl;
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {
    this.escucharCambiosAuto();
    this.escucharCambioBusqueda();
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((pokemons) => {this.selccionaAuto= pokemons;})
  }

  escucharCambioBusqueda() {
    this._usuarioService.emitircambioBusqueda.subscribe((pokemons) => {this.nuevaUrl= pokemons;})
  }

  seleccionar(indice){
    const url = ['/modeloPokemon'];
    this._router.navigate(url);
    this._usuarioService.setIndice(indice);
    return indice;
  }
  configUrl = 'http://localhost:1337/Maestro?nombres=';

  buscar() {
    this.nuevaUrl=this.configUrl+''+this.nombre;
    return this.http.get<Maestro>(this.nuevaUrl);

  }
  id;

  mostrarBusqueda()
  {
    this.buscar().subscribe((data: Maestro) => console.log({data}));
    this.nuevaUrl=this.configUrl+''+this.nombre;
    this._usuarioService.guardarUrl(this.nuevaUrl);
    this.mostrar=this._usuarioService.mostrar;
    this.http.get<Maestro[]>(this.nuevaUrl).subscribe((data: Maestro[]) => {
      this.maestro = data;
    });

    this._usuarioService.guardarUrlHijos('http://localhost:1337/Pokemon?nombrePokemon=Pikachu');

  }

}
