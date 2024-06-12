import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Markdown } from '@app/interfaces/markdown';
import { ToastrService } from 'ngx-toastr';
const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class ModificationProposalService {
  private readonly http = inject(HttpClient);
  private toastr: ToastrService = inject(ToastrService);
  constructor() {}
  public postModificationProposal(
    id_formation: number,
    id_page: number,
    id_block: number,
    content: Markdown
  ) {
    this.http
      .post(
        `${IP_API}/formations/${id_formation}/contenu/${id_page}/bloc/${id_block}`,
        content
      )
      .subscribe(() => {
        this.toastr.success('Proposition de modification envoyée', 'Succès');
      });
  }
}
