import { Formation } from './../interfaces/formation';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tag } from '../interfaces/tag';
import { FormationService } from './formation.service';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { AuthService } from '@services/auth.service';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Markdown } from '@app/interfaces/markdown';
import { pageContent } from '@app/interfaces/page-content';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class CreateFormationService {
  private toastr: ToastrService = inject(ToastrService);
  private readonly http = inject(HttpClient);
  private readonly  defaultFormation: Formation = {
    titre: 'My new Formation',
    description: 'This is a description',
    tag: [],
    body: [
      {
        id: 1,
        nom: 'Page 1',
        contenu: [
          {
            id: 1,
            title: 'Bloc 1',
            contenu: {
              id: 1,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          }
        ],
      },
    ],
  } as Formation;
  public formation: Formation = this.defaultFormation;
  public headerIsValidated = false;
  public imageFile: File | undefined;
  public imageUrl: string | undefined;
  public loading: boolean = true;
  public socket: io.Socket;
  private router: Router = inject(Router);
  private formationService: FormationService = inject(FormationService);

  constructor(private authService: AuthService) {
    this.socket = io.connect(`${environment.IP_API}`);

    this.socket.on('connect', () => {
      console.log("connected to server");
    });
   }

  getTags(): Observable<Tag[]> {
    const temp = this.http.get<Tag[]>(`${IP_API}/tags`);
    return temp;
  }

  createEmptyFormation() {
    this.formation = this.defaultFormation;
    this.headerIsValidated = false;
    this.imageFile = undefined;
    this.imageUrl = undefined;
    this.http.post<{ id: number }>(`${IP_API}/formations`, {}).subscribe((rep) => {
      this.formation.id = rep.id;
      this.router.navigate(['create-formation', this.formation.id])
    });
  }

  createFormation(formation: any): Observable<any> {
    return this.http
      .post<Formation>(`${IP_API}/formations`, {
        titre: formation.titre,
        tags: formation.tags,
        description: formation.description,
      })
      .pipe(catchError(this.handleError));
  }

  postImageHeader(id: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${IP_API}/file/formations/${id}`, formData);
  }


  private handleError = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      this.toastr.error('Server is down', 'Something went wrong');
    } else {
      this.toastr.error(error.error.error, 'Something went wrong');
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  };

  saveFormationInLocal() {
    localStorage.setItem('formation-' + this.formation.id, JSON.stringify(this.formation));
    localStorage.setItem('headerIsValidated-' + this.formation.id, JSON.stringify(this.headerIsValidated));
    localStorage.setItem('imageUrl-' + this.formation.id, JSON.stringify(this.imageUrl));
  }

  loadFormation() {
    if (this.formation.id) {
      this.initWebSocket();
      const formation = localStorage.getItem('formation-' + this.formation.id);
      const headerIsValidated = localStorage.getItem('headerIsValidated-' + this.formation.id);
      const imageUrl = localStorage.getItem('imageUrl-' + this.formation.id);
      if (formation) {
        this.formation = JSON.parse(formation);
        if (headerIsValidated) {
          this.headerIsValidated = JSON.parse(headerIsValidated);
        }
        if (imageUrl) {
          this.imageUrl = JSON.parse(imageUrl);
        }
        this.loading = false;
      } else {
        this.formationService.getFormationByIdContent(this.formation.id).subscribe((formation) => {
          if (formation.titre) {
            this.formation.titre = formation.titre;
          }
          if (formation.description) {
            this.formation.description = formation.description;
          }
          if (formation.tag) {
            this.formation.tag = formation.tag;
          }
          if (formation.body && formation.body?.length > 0) {
            this.formation.body = formation.body;
          }
          if (formation.publier) {
            this.formation.publier = formation.publier;
          }
          if (formation.user) {
            this.formation.user = formation.user;
          }
          if (formation.date_creation) {
            this.formation.date_creation = formation.date_creation;
          }
          this.imageUrl = `${IP_API}/file/formations/${this.formation.id}.png`;
          this.loading = false;
        });
      }
    }
  }

  saveAllFormationInRemote() {
    if (this.formation.id) {
      this.http.put(`${IP_API}/formations/${this.formation.id}/header`, {
        titre: this.formation.titre,
        description: this.formation.description,
        tags: this.formation.tag?.map((tag) => tag.id),
      }).pipe(catchError(this.handleError)).subscribe();
      if (this.formation.body) {
        this.http.put(`${IP_API}/formations/${this.formation.id}/contenu`, this.formation.body)
          .pipe(catchError(this.handleError))
          .subscribe();
      }
      localStorage.removeItem('formation-' + this.formation.id);
      localStorage.removeItem('headerIsValidated-' + this.formation.id);
      localStorage.removeItem('imageUrl-' + this.formation.id);
      localStorage.removeItem('imageFile-' + this.formation.id);
    }
  }

  saveHeaderImage() {
    if (this.imageFile && this.formation.id) {
      this.postImageHeader(this.formation.id, this.imageFile as File).pipe(catchError(this.handleError)).subscribe(() => {
        this.toastr.success('Image uploaded', 'Success');
      });
    }
  }

  initWebSocket() {
    try{
      this.socket.emit('connection-to-room', { 
        room_id: this.formation.id,
        token: this.authService.getToken()
      })
    } catch (error) {
      console.error("Error while connecting to room", error);
    }

    this.socket.on('edit', (param) => {
      if (this.formation.body) {
        const page = this.formation.body.find((p) => p.id === param.idPage);
        if (page) {
          const bloc = page.contenu.find((b) => b.id === param.idBloc);
          if (bloc) {
            bloc.contenu.text = param.text;
          }
        }
      }
    });

    this.socket.on('moveBlock', (param) => {
      if (this.formation.body) {
        const page = this.formation.body.find((p) => p.id === param.idPage);
        if (page) {
          moveItemInArray(page.contenu, param.previousIndex, param.currentIndex);
        }
      }
    });

    this.socket.on('addBlockMD', (param) => {
      if (this.formation.body) {
        const page = this.formation.body.find((p) => p.id === param.idPage);
        if (page) {
          const newId = Math.max(...page.contenu.map((block) => block.id)) + 1;
          page.contenu.push({
            id: newId,
            title: 'New Bloc',
            contenu: {
              id: newId,
              type: 'markdown',
              text: 'markdown\n### Content of the new bloc\n```\nCeci est un exemple de contenu en Markdown.\n```',
            },
          });
          moveItemInArray(page.contenu, newId, param.parentBlockIndex + 1);
        }
      }
    });

    this.socket.on('editTitle', (param) => {
      if (this.formation.body) {
        const page = this.formation.body.find((p) => p.id === param.idPage);
        if (page) {
          const bloc = page.contenu.find((b) => b.id === param.idBloc);
          if (bloc) {
            bloc.title = param.title;
          }
        }
      }
    });

    this.socket.on('addPage', (param) => {
      if (this.formation.body) {
        this.formation.body.push({
          id: param.newPageId,
          nom: 'New Title',
          contenu: [
            {
              id: 0,
              title: 'First bloc title',
              contenu: {
              id: 1,
              type: 'markdown',
              text: '#### Contenu du bloc 1\n```\nCeci est un exemple de contenu en Markdown pour le bloc 1.\n```',
              } as Markdown,
          } as pageContent,
          ],
        });
        moveItemInArray(this.formation.body, this.formation.body.length-1, param.parentPageIndex);
      }
    });

    this.socket.on('movePage', (param) => {
      if (this.formation.body) {
        moveItemInArray(this.formation.body, param.previousIndex, param.currentIndex);
      }
    });

    this.socket.on('editPageTitle', (param) => {
      if (this.formation.body) {
        const page = this.formation.body.find((p) => p.id === param.idPage);
        console.log('page', page);
        if (page) {
          page.nom = param.title;
        }
      }
    });
  }

  wsSendEdit(idPage: number, idBloc: number, text: string) {
    this.socket.emit('edit', {
      idPage: idPage,
      idBloc: idBloc,
      text: text
    });
  }

  wsSendMoveBlock(idPage: number, previousIndex: number, currentIndex: number) {
    this.socket.emit('moveBlock', {
      idPage: idPage,
      previousIndex: previousIndex,
      currentIndex: currentIndex
    });
  }

  wsSendAddBlock(idPage: number, parentBlockIndex: number, newBlockId: number) {
    this.socket.emit('addBlockMD', {
      idPage: idPage,
      parentBlockIndex: parentBlockIndex,
      newBlockId: newBlockId
    });
  }

  wsSendEditTitle(idPage: number, idBloc: number, title: string) {
    this.socket.emit('editTitle', {
      idPage: idPage,
      idBloc: idBloc,
      title: title
    });
  }

  wsSendAddPage(parentPageIndex: number, newPageId: number) {
    this.socket.emit('addPage', {
      parentPageIndex: parentPageIndex,
      newPageId: newPageId
    });
  }

  wsSendMovePage(previousIndex: number, currentIndex: number) {
    this.socket.emit('movePage', {
      previousIndex: previousIndex,
      currentIndex: currentIndex
    });
  }

  wsSendEditPageTitle(idPage: number, title: string) {
    this.socket.emit('editPageTitle', {
      idPage: idPage,
      title: title
    });
  }
  
}
