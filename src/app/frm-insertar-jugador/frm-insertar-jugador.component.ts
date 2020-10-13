import { IJugador } from './../Interfaces/Ijugador';
import { JugadorService } from './../JugadorService/JugadorService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frm-insertar-jugador',
  templateUrl: './frm-insertar-jugador.component.html',
  styleUrls: ['./frm-insertar-jugador.component.css'],
})
export class FrmInsertarJugadorComponent implements OnInit {
  private frmInsertar: FormGroup;

  constructor(
    private builer: FormBuilder,
    private jugadorServicio: JugadorService
  ) {}

  ngOnInit(): void {
    this.frmInsertar = this.builer.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', Validators.maxLength(2)],
      equipo: ['', Validators.required],
      posicion: ['', Validators.required],
      pais: ['', Validators.required],
    });
  }

  insertar() {
    if (this.frmInsertar.invalid) {
      alert('Por rellene toda la informacion necesaira');
    } else {
      const jugador: IJugador = this.frmInsertar.value;
      this.jugadorServicio.insertarJugador(jugador).subscribe((response) => {
        alert(response.message);
      });
    }
  }

  obtenerFormGroup(): FormGroup {
    return this.frmInsertar;
  }
}
