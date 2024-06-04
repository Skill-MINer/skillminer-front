import { Markdown } from './markdown';

export interface pageContent {
  id: number;
  title: string;
  contenu: Markdown;
  editMode?: boolean;
  editContent?: Markdown; 
}
