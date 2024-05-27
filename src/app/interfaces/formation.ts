import { Tag } from './tag';
import { User } from './user';
import { Page } from './page';
export interface Formation {
  id?: number;
  titre?: string;
  date_creation?: string;
  description?: string;
  user?: User;
  tag?: Tag[];
  body?: Page[];
  publier?: boolean;
}
