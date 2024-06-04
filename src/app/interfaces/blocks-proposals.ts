import { Markdown } from "./markdown";

export interface BlocksProposals {
    id: number;
    title: string;
    proposalsContenu: Markdown[];
    contenu: Markdown;
}
