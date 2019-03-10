import '../styles/index.css'
import { useState, useEffect } from 'react';
import * as Autocomplete from 'react-autocomplete';
import { ArticleHeader } from '../models/article'
import { getAllArticleHeaders, getAllArticleHeadersAsync } from '../services/data.service';
import Router from 'next/router'

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



function searchTermIsInArticle(article: ArticleHeader, searchTerm: string) : boolean {
    return (
        article.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        article.id.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        article.date.getFullYear().toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1    
    )
}

function Search() {
    var [searchInput, setSearchInput] = useState("");
    var [autocompleteOptions, setAutoCompleteOptions] = useState<ArticleHeader[]>([]);
    // Todo: find a less hacky way of fetching data asynchronously.
    // From https://www.robinwieruch.de/react-hooks-fetch-data/
    useEffect(() => {
        const fetchData = async () => {
            const headers = await getAllArticleHeadersAsync();
            setAutoCompleteOptions(headers);
        }

        fetchData();
    },[]);
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
            items={autocompleteOptions}
            getItemValue={(item: ArticleHeader) => item.name}
            shouldItemRender={searchTermIsInArticle}
            sortItems={sortNamesByHowWellTheyMatch}
            onChange={(e: Event, value: string) => setSearchInput(e.target.value)}
            onSelect={(value: string, item: ArticleHeader) => {Router.push(`/article?id=${item.id}`)}}
            renderMenu={children => (
                <div className="menu border">
                    {children}
                </div>
            )}
            renderItem={(item: ArticleHeader, isHighlighted: boolean) => (
                <div
                    className={`p-1 ${isHighlighted ? 'bg-blue-light text-white' : ''}`}
                    key={item.id}
                >{`${item.name} (${item.date.getFullYear()})`}</div>
            )}
        />
    </div>
}

export default Search