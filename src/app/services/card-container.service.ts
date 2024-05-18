import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { Formation } from '@interfaces/formation';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class CardContainerService {
  
  constructor(private http: HttpClient) {}

  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${IP_API}/formations`);
  }

  getFormationsByUser(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${IP_API}/formations/user`);
  }
}
