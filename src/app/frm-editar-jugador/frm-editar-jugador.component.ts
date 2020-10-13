import { IJugador } from './../Interfaces/Ijugador';
import { ActivatedRoute } from '@angular/router';
import { JugadorService } from './../JugadorService/JugadorService';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-frm-editar-jugador',
  templateUrl: './frm-editar-jugador.component.html',
  styleUrls: ['./frm-editar-jugador.component.css'],
})
export class FrmEditarJugadorComponent implements OnInit {
  frmEditar: FormGroup;
  @Input() jugadorParaEditar: IJugador;

  constructor(
    private builer: FormBuilder,
    private jugadorServicio: JugadorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.jugadorParaEditar);
    if (
      typeof this.jugadorParaEditar === 'undefined' ||
      this.jugadorParaEditar === null
    ) {
      this.frmEditar = this.builer.group({
        codjuga: ['', Validators.required],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        edad: ['', Validators.maxLength(2)],
        equipo: ['', Validators.required],
        posicion: ['', Validators.required],
        pais: ['', Validators.required],
      });
    } else {
      this.setearJugador();
    }
  }

  editar() {
    console.log(this.frmEditar.value);
  }

  setearJugador() {
    this.frmEditar = this.builer.group({
      codjuga: [this.jugadorParaEditar.codjuga, Validators.required],
      nombre: [
        this.jugadorParaEditar.nombreCompletos,
        [Validators.required, Validators.minLength(3)],
      ],
      edad: [this.jugadorParaEditar.edad, Validators.maxLength(2)],
      equipo: [this.jugadorParaEditar.equipo, Validators.required],
      posicion: [this.jugadorParaEditar.posicion, Validators.required],
      pais: [this.jugadorParaEditar.pais, Validators.required],
    });
  }
}
