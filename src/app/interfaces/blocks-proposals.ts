import { Markdown } from "./markdown";

export interface BlocksProposals {
    id: number;
    title: string;
    contenu: Markdown;
    proposalsContenu: Markdown[];
}
