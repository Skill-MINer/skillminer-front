import { Injectable, inject } from '@angular/core';
import { BlocksProposals } from '@app/interfaces/blocks-proposals';
import { FormationMergeProposals } from '@app/interfaces/formation-merge-proposals';
import { Markdown } from '@app/interfaces/markdown';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { catchError, throwError } from 'rxjs';

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

  updateBlockProposal() {
    this.http.put(`${IP_API}/formations/${this.fomrationMergeProposals.id}/contenu`, this.fomrationMergeProposals.body)
      .pipe(catchError(this.handleError))
      .subscribe();
  }

}
