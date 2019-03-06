import Link from 'next/link'
import { getRecentArticles } from '../services/data.service';

const recentArticles = getRecentArticles(2);

export default () => (
    <div>
        <ul>
            {
                recentArticles.map((a) =>
                    <li key={a.id}>
                        <Link href={`/article?id=${a.id}`}>
                            <a>{a.name}</a>
                        </Link>
                    </li>
                )
            }
        </ul>
    </div>
)