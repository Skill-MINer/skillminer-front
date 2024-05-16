import { Markdown } from './markdown';
import { pageContent } from './pageContent';

export interface Page {
  id: number;
  nom: string;
  contenu: pageContent[];
}
