export interface SummaryPage {
    id: number;
    title: string;
    subtitle: {
        id: number;
        title: string;
        contenu: string;
    }[];
}
