import { Markdown } from './markdown';
import { pageContent } from './page-content';

export interface Page {
  id: number;
  nom: string;
  contenu: pageContent[];
}
