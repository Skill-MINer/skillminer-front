import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '@app/interfaces/tag';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
const IP_API = environment.IP_API;
@Injectable({
  providedIn: 'root',
})
export class TagsService {
  public activeTag: Tag | null = null;
  constructor(private http: HttpClient) {}
  getTags(limit?: number): Observable<Tag[]> {
    const temp = this.http.get<Tag[]>(`${IP_API}/tags`);
    return temp;
  }
}
