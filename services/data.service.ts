import { Article, ArticleHeader } from '../models/article'

const mocks: ArticleHeader[] = [
    { id: "article1", name: "Sample Article 1", date: new Date(1989,1,18) },
    { id: "article2", name: "Sample Article 2", date: new Date(2017,6,10) },
    { id: "article3", name: "Sample Article 3", date: new Date(2002,1,2) },
    { id: "article4", name: "Sample Article 4", date: new Date(1985,9,13) },
    { id: "article5", name: "Sample Article 5", date: new Date(1972,4,19) },
    { id: "article6", name: "Sample Article 6", date: new Date(1954,3,21) },
    { id: "article7", name: "Sample Article 7", date: new Date(1928,7,23) },
    { id: "article8", name: "Sample Article 8", date: new Date(1918,2,22) },
];

export function loadFullArticle(id: string): Article {
    const header = mocks.find((a) => a.id === id);
    if (!header) 
        throw new Error(`id '${id}' not found`);
    return loadFullArticleFromHeader(header);
}

export function loadFullArticleFromHeader(header: ArticleHeader): Article {
    // todo: there's probably a nicer syntax for this
    return {id: header.id, name: header.name, date: header.date, description: loadDescription(header.id)}
}

export function loadDescription(id: string) {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat."
}

export function getRecentArticleHeaders(howManyToGet: number) {
    return mocks.slice(0,howManyToGet);
}

export function getAllArticleHeaders() {
    return mocks;
}