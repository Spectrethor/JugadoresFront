import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TablaJugadoresComponent } from './tabla-jugadores/tabla-jugadores.component';
import { FrmInsertarJugadorComponent } from './frm-insertar-jugador/frm-insertar-jugador.component';
import { FrmEditarJugadorComponent } from './frm-editar-jugador/frm-editar-jugador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { JugadorService } from './JugadorService/JugadorService';

const Router: Routes = [
  { path: 'jugador', component: TablaJugadoresComponent },
  { path: 'jugador/insertar', component: FrmInsertarJugadorComponent },
  { path: '', redirectTo: '/jugador', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TablaJugadoresComponent,
    FrmInsertarJugadorComponent,
    FrmEditarJugadorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    //con esto le indicamos con ForRoot que esta
    //rutas van a ser globales para toda la aplicacion
    RouterModule.forRoot(Router),
  ],
  //con esto le idcamos que este jugadorService ya se puede inpyectar a otras clases como dependecia
  providers: [JugadorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
