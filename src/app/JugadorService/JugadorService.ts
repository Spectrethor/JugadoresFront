import { IResponse } from './../Interfaces/IResponse';
import { IJugador } from './../Interfaces/Ijugador';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//con esto le indicamos que nuestra clase puede ser inyectada de
//una clase o vicercersa
@Injectable()
export class JugadorService {
  URL: string;
  //ahi le indicamos esta clase tiene una dependencia
  constructor(private http: HttpClient) {
    this.URL = 'http://127.0.0.1:3000/jugador';
  }

  insertarJugador(jugador: IJugador) {
    return (
      this.http
        .post<IResponse>(this.URL, jugador, {
          headers: new HttpHeaders({ 'Content-type': 'application/json' }),
        })
        //este pipe es una funcion donde nos permite colocar una serie de operadores que nos ayudan
        //a realizar diferentes actividades en este caso con nuestra respuesta de error
        //usamos el operador cathError() ,como ha este le pasamos un error de tipo Observable
        //entonces por conguiente es funcion no es necesario que la llamemos de una vez ya es que asyncrona
        //y no es necesario llamar al async
        .pipe(catchError(this.ManejadorDeErrores))
    );
  }

  /* editarJugador(jugador: IJugador): Observable<IResponse> {
    return this.http
      .put<IResponse>(this.URL, jugador, {
        headers: new HttpHeaders({ 'content-type': 'application/json' }),
      })
      .pipe(catchError(this.ManejadorDeErrores));
  }*/

  mostrarJugador(): Observable<IResponse> {
    return this.http
      .get<IResponse>(this.URL)
      .pipe(catchError(this.ManejadorDeErrores));
  }

  editarJugador(jugador: IJugador): Observable<IResponse> {
    return this.http
      .put<IResponse>(this.URL, jugador, {
        headers: new HttpHeaders({ 'Content-type': 'Application/json' }),
      })
      .pipe(catchError(this.ManejadorDeErrores));
  }

  eliminarJugador(jugador: IJugador): Observable<IResponse> {
    return this.http
      .delete<IResponse>(this.URL + `/${jugador.codjuga}`, {
        headers: new HttpHeaders({ 'Content-type': 'Application/json' }),
      })
      .pipe(catchError(this.ManejadorDeErrores));
  }

  //esa clase es con la cual yo puedo manejar lo errores ya sean del fron o back
  private ManejadorDeErrores(error: HttpErrorResponse) {
    //hay dos tipos de errores que pueden ocurrir
    //si es de front en eset caso estamos hablando de un ErrorEvent
    //entonces aque decimos si el error ocurrido es de tipo Error Event
    //para saber si es el front el que esta fallando
    let mensajeError: string = '';
    if (error.error instanceof ErrorEvent) {
      //entonces aqui le indicamos el error especifico que ah ocurrido del ErrorEvent
      console.log('Un error ha ocurrido en el front', error.error.message);

      (mensajeError = 'Un error ha ocurrido en el front'), error.error.message;
    } else {
      //error.status codigo de error
      console.log(`BackEnd retorno un codigo ${error.status} y el mensaje 
        del error es ${error.message}`);

      mensajeError = `BackEnd retorno un codigo ${error.status} y el mensaje 
        del error es ${error.message}`;
    }

    //throwError con este emitimos un Observable que contentra nuestro error
    //y esto le pasaremos a nuestro operador que captura el erro para mostrar al usaurio
    return throwError(mensajeError);
  }
}
