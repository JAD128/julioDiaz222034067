import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  // Url del API almacenada de forma privada
  apiUrl = 'https://localhost:7053/api/Users'

  constructor(private http : HttpClient) { }
  // Observable es un objeti que representa un flujo de datos que se puede manejar
  // de forma asincrona. Los Observables son parte de la biblioteca RxJS(R)
  // y se utilizan para manejar eventos de flujos o datos que pueden ocurrir en el futuro
  // como respuesta de peticiones HTTP, eventos del usuario - se 

  login(username : string, password : string):Observable<any>{
    //post: hace un envio :)
    // return this.http.post(this.apiUrl, {username, password})
    return this.http.post(`${this.apiUrl}/login`, {username, password}) // El /login es el metodo del Endpoint
  }

  register(username : string, password : string):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, {username, password}) //El /register es el metodo del Endpoint

  }
}
// server=CARITO_DELGADO\MSSQLSERVER01;Database=dbtest;User id=sa; Password=12345; TrustServerCertificated=true;
