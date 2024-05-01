import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
const IP_API = environment.IP_API;
import { Observable, of } from 'rxjs';
import { Formation } from '../interfaces/formation';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  public listFormation: Observable<Formation[]> = of([]);
  constructor(private http: HttpClient) { }

  public getFormations(titre: string){
    const params = new HttpParams()
    //.set('titre', 'angular')
    .set('titre', titre) //.join pour stringifier objet tab 
    this.listFormation = this.http.get<Formation[]>(`${IP_API}/formations`, {params});
    return this.listFormation;
  }
}
