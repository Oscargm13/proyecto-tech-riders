import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServicePrincipal {
  constructor(private _http: HttpClient) {}

  loginUser(email: string, password: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Auth/Login';
    let json = JSON.stringify({
      email: email,
      password: password,
    });
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url + request, json, { headers: header });
  }

  getPerfilUsuario(token: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Usuarios/PerfilUsuario';
    let header = new HttpHeaders({ Authorization: 'bearer ' + token });
    return this._http.get(url + request, { headers: header });
  }

  findUsuario(id: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Usuarios/' + id;
    let header = new HttpHeaders({
      Authorization: 'bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(url + request, { headers: header });
  }

  findProvincia(id: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Provincias/' + id;
    return this._http.get(url + request);
  }

  findEmpresaCentro(id: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/EmpresasCentros/' + id;
    return this._http.get(url + request);
  }

  findRole(id: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Roles/' + id;
    let header = new HttpHeaders({
      Authorization: 'bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(url + request, { headers: header });
  }
}
