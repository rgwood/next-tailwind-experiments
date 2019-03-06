import '../styles/index.css'
import { useState, SyntheticEvent } from 'react';
import * as Autocomplete from 'react-autocomplete';
import { ArticleHeader } from '../models/article'
import { getAllArticleHeaders } from '../services/data.service';
import { SingletonRouter } from 'next/router';
import { isString } from 'util';

export interface Props {
    router: SingletonRouter;
}

/**
 * An example of how to implement a relevancy-based sorting method. States are
 * sorted based on the location of the match - For example, a search for "or"
 * will return "Oregon" before "North Carolina" even though "North Carolina"
 * would normally sort above Oregon. Strings where the match is in the same
 * location (or there is no match) will be sorted alphabetically - For example,
 * a search for "or" would return "North Carolina" above "North Dakota".
 */
function sortNamesByHowWellTheyMatch(a: ArticleHeader, b: ArticleHeader, value: string) {
    const aLower = a.name.toLowerCase()
    const bLower = b.name.toLowerCase()
    const valueLower = value.toLowerCase()
    const queryPosA = aLower.indexOf(valueLower)
    const queryPosB = bLower.indexOf(valueLower)
    if (queryPosA !== queryPosB) {
        return queryPosA - queryPosB
    }
    return aLower < bLower ? -1 : 1
}

function searchTermIsInArticle(article: ArticleHeader, searchTerm: string) {
    // why the fuck is `searchTerm` a SyntheticEvent after a keypress?
    console.log({searchTerm});

    return (
        article.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        article.id.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    )
}

function Search(props: Props) {
    var [searchInput, setSearchInput] = useState("");
    return <div >
        <label htmlFor="search-autocomplete" className="font-bold">Search</label>
        <div />
        <Autocomplete
            value={searchInput}
            inputProps={{ 
                id: 'search-autocomplete', 
                className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
                placeholder:"Search articles"
            }}
            items={getAllArticleHeaders()}
            getItemValue={(item: ArticleHeader) => item.name}
            shouldItemRender={searchTermIsInArticle}
            sortItems={sortNamesByHowWellTheyMatch}
            onChange={(value: string) => setSearchInput(value)}
            onSelect={(value: string, item: ArticleHeader) => {
                // setSearchInput(value);
                if (props.router) {
                    props.router.push(`/article?id=${item.id}`);
                }
            }}
            renderMenu={children => (
                <div className="menu">
                    {children}
                </div>
            )}
            renderItem={(item: ArticleHeader, isHighlighted: boolean) => (
                <div
                    className={`${isHighlighted ? 'bg-blue-light' : ''}`}
                    key={item.id}
                >{item.name}</div>
            )}
        />
    </div>
}

export default Search