import { Injectable, inject } from '@angular/core';
import { FormationMergeProposals } from '@app/interfaces/formation-merge-proposals';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '@env/environment';
import { catchError, throwError } from 'rxjs';
import { PagesProposals } from '@app/interfaces/pages-proposals';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root'
})
export class MergeEditProposalsService {

  private toastr: ToastrService = inject(ToastrService);
  public fomrationMergeProposals: FormationMergeProposals = {} as FormationMergeProposals;

  constructor(private http: HttpClient) { }

  getFormationMergeProposals() {
    if (!this.fomrationMergeProposals.id) {
      this.toastr.error('No formation id', 'Something went wrong');
      return;
    }
    return this.http.get<FormationMergeProposals>(`${IP_API}/formations/${this.fomrationMergeProposals.id}/contenu`)
      .pipe(catchError(this.handleError))
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

  deleteBlockProposal(idPage: number, idBlock: number, idBlockProposal: number) {
    this.http.delete(`${IP_API}/formations/${this.fomrationMergeProposals.id }/contenu/${idPage}/bloc/${idBlock}/proposal/${idBlockProposal}`)
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  updateBlockProposal(actualPage: PagesProposals) {
    console.log('updateBlockProposal', actualPage);
    this.http.put(`${IP_API}/formations/${this.fomrationMergeProposals.id}/contenu/${actualPage.id}`, {contenu: actualPage.contenu})
      .pipe(catchError(this.handleError))
      .subscribe(
        (res) => {
          console.log('updateBlockProposal res', res);
          this.toastr.success('Block proposal updated', 'Success');
        }
      );
  }

}
