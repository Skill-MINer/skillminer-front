import { Markdown } from './markdown';

export interface SummaryPage {
  id: number;
  title: string;
  subtitle: {
    id: number;
    title: string;
    contenu: Markdown;
  }[];
}
