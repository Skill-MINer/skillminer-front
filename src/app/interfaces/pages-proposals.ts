import { Block } from "@angular/compiler";
import { BlocksProposals } from "./blocks-proposals";

export interface PagesProposals {
    id: number;
    nom: string;
    contenu: BlocksProposals[];
}
