import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
const IP_API = environment.IP_API;
import { Observable, of } from 'rxjs';
import { Formation } from '../interfaces/formation';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  public listFormation: Observable<Formation[]> = of([]);
  constructor(private http: HttpClient) {}

  public getFormations(
    titre: string,
    limit: number,
    offset: number,
    tags?: string
  ): Observable<Formation[]> {
    let params: HttpParams;
    if (tags !== undefined && tags !== '') {
      params = new HttpParams()
        //.set('titre', 'angular')
        .set('titre', titre) //.join pour stringifier objet tab
        .set('limit', limit)
        .set('offset', offset)
        .set('tags', tags);
    } else {
      params = new HttpParams()
        //.set('titre', 'angular')
        .set('titre', titre) //.join pour stringifier objet tab
        .set('limit', limit)
        .set('offset', offset);
    }
    return this.http.get<Formation[]>(`${IP_API}/formations`, {
      params,
    });
  }
  public getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${IP_API}/formations/${id}`);
  }
  public getFormationByIdContent(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${IP_API}/formations/${id}/contenu`);
  }
}
