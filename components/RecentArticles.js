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

export default () => (
    <div>
        <ul>
            {
                recentArticles.map((a) => <ArticleLink id={a.id} name={a.name}/>)
            }
        </ul>
    </div>
)