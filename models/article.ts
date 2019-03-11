export interface ArticleHeader {
    id: number;
    name: string;
    date?: Date;
    url?: string;
}

export interface Article extends ArticleHeader {
    description: string;
}