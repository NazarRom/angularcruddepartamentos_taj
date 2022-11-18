import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Departamento } from "../models/departamento";
@Injectable()
export class DepartamentoService {
    constructor(private _http: HttpClient) { }

    create(departamento: Departamento): Observable<any> {
        //convertimos nuestro objeto a json
        var json = JSON.stringify(departamento);
        //debemos indicar el tipo de objeto a enviar en la peticion
        //en el header
        var header = new HttpHeaders().set("Content-Type", "application/json")
        var request = "api/departamentos";
        var url = environment.urlApiDepartamentos + request;
        return this._http.post(url, json, { headers: header });
    }
    getDepartamentos(): Observable<any> {
        var request = "api/departamentos"
        var url = environment.urlApiDepartamentos + request;
        return this._http.get(url);
    }

    update(departamento: Departamento): Observable<any> {
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "/api/departamentos";
        var url = environment.urlApiDepartamentos + request;
        return this._http.put(url, json, { headers: header });
    }

    delete(id:number): Observable<any>{
        var request = "api/departamentos/" + id;
        var url = environment.urlApiDepartamentos + request;
        return this._http.delete(url);
    }
}