import { Tag } from './tag';
import { User } from './user';

export interface Formation {
  id?: string;
  titre?: string;
  date_creation?: string;
  description?: string;
  user?: User;
  tag?: Tag[];
}
