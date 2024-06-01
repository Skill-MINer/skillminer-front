import { BlocksProposals } from "./blocks-proposals";
import { PagesProposals } from "./pages-proposals";
import { Tag } from "./tag";
import { User } from "./user";

export interface FormationMergeProposals {
    id?: number;
    titre?: string;
    date_creation?: string;
    description?: string;
    user?: User;
    tag?: Tag[];
    body?: PagesProposals[];
    publier?: boolean;
}
