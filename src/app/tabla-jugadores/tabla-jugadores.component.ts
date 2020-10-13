import { FrmEditarJugadorComponent } from './../frm-editar-jugador/frm-editar-jugador.component';
import { IJugador } from './../Interfaces/Ijugador';
import { JugadorService } from './../JugadorService/JugadorService';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.css'],
})
export class TablaJugadoresComponent implements OnInit {
  //array donde esta toda la informacion
  //entonces para no hacer una busqueda de nuevo de la base de datos
  //usaremos este como orifen de datos
  jugadores: Array<IJugador>;
  //seteamos este cuando se de click en editar
  jugadorAEditar: IJugador;

  @ViewChild(FrmEditarJugadorComponent) frmEditar: FrmEditarJugadorComponent;

  constructor(private jugador: JugadorService) {
    this.jugadores = [];
  }

  ngOnInit(): void {
    this.jugador.mostrarJugador().subscribe((response) => {
      this.jugadores = response.list;
    });
  }

  seleccionEditar(codigoJugador: number): void {
    //para que nos dea el primer elemento que ya que el filter siempre nos da
    //un array aunque nostros queramos solo queramos un solo data
    this.jugadorAEditar = this.jugadores.filter((player) => {
      if (player.codjuga === codigoJugador) {
        return player;
      }
    })[0];
  }

  seleccionEliminar(codigoJugador: number) {}
}
