export interface ArticleHeader {
    id: string;
    name: string;
    date: Date;
}

export interface Article extends ArticleHeader {
    description: string;
}