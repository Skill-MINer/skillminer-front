import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../../../config';
import { Observable, of } from 'rxjs';
import { Formation } from '../interfaces/formation';
const { IP_API } = config;
@Injectable({
  providedIn: 'root',
})
export class CardContainerService {
  constructor(private http: HttpClient) {}
  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${IP_API}/formations`);
  }
}
