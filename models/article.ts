export interface ArticleHeader {
    id: number;
    name: string;
    date: Date;
}

export interface Article extends ArticleHeader {
    description: string;
}