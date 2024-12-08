import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudVacacionesService {

  apiUrl = 'https://localhost:7233/api/UsersVacations'

  constructor(private http : HttpClient) { }

  register(name : string, lastName : string, email :string, phone : string, name_g : string, email_g : string, date_ini : string, date_fi : string, notes : string):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, {name,lastName,email,phone,name_g,email_g,date_ini,date_fi,notes})
  }

  validation(lastName : string, email :string):Observable<any>{
    return this.http.post(`${this.apiUrl}/validation`, {lastName, email})
  }
}
