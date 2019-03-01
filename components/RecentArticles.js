import Link from 'next/link'
import { getRecentArticles } from '../services/data.service';

const ArticleLink = (props) => (
    <li>
        <Link href={`/article?id=${props.id}`}>
            <a>{props.name}</a>
        </Link>
    </li>
)

const recentArticles = getRecentArticles(2);

// TODO: implement a proper foreach, this is dumb I just couldn't figure out the syntax on the plane
export default () => (
    <div>
        <ul>
            <ArticleLink id={recentArticles[0].id} name={recentArticles[0].name} />
            <ArticleLink id={recentArticles[1].id} name={recentArticles[1].name} />
        </ul>
    </div>
)