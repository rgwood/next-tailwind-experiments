import { Article, ArticleHeader } from '../models/article'

const serverAddress = "http://localhost:3001";

export async function loadFullArticle(id: number): Promise<Article> {
    var header = await getArticleHeader(id);
    if (!header) 
        throw new Error(`id '${id}' not found`);
    return loadFullArticleFromHeader(header);
}

export async function loadFullArticleFromHeader(header: ArticleHeader): Promise<Article> {
    // todo: there's probably a nicer syntax for this
    return {id: header.id, name: header.name, date: header.date, description: await loadDescription(header.id)}
}

export async function loadDescription(id: number) {
    var res = await fetch(`${serverAddress}/article_text?article_id=eq.${id.toString()}`);
    var parsed = JSON.parse(await res.text());

    return (parsed[0] && parsed[0].text) ? parsed[0].text: "";
}

export async function getRecentArticleHeaders(howManyToGet: number) {
    return (await getAllArticleHeaders()).slice(0,howManyToGet);
}

export async function getAllArticleHeaders() {
    var url = `${serverAddress}/article`;
    var res = await fetch(url);
    var parsed = JSON.parse(await res.text());
    // Force parsing of strings to dates. Is there a less crazy way of doing this?
    parsed.forEach(header => {
        header.date = new Date(Date.parse(header.date));
    });
    return parsed;
}

export async function getArticleHeader(id: number) {
    var url = `${serverAddress}/article?id=eq.${id.toString()}`;
    var res = await fetch(url);
    var parsed = JSON.parse(await res.text());
    // Force parsing of strings to dates. Is there a less crazy way of doing this?
    parsed.forEach(header => {
        header.date = new Date(Date.parse(header.date));
    });
    return parsed[0];
}
