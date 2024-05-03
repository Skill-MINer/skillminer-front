import { Markdown } from './markdown';

export interface Page {
  id: number;
  nom: string;
  contenu: {
    id: number;
    title: string;
    contenu: Markdown;
  }[];
}
