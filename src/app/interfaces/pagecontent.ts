import { Markdown } from './markdown';

export interface pageContent {
  id: number;
  title: string;
  type?: string;
  contenu: Markdown;
}
