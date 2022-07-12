import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Search = () => {

    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);

    useEffect(() => {

        const search = async () => {
            await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: "query",
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            }).then((res) => {
                setResults(res.data.query.search);
            })
        }

        if (term && !results.length) {
            search();
        } else {
            const timeOutId = setTimeout(() => {

                if (term) {
                    search();
                }
            }, 1000);

            return () => {
                clearTimeout(timeOutId);
            };
        }
    }, [term])

    const renderedResult = results.map((res) => {
        return (
            <div className='item' key={res.pageid}>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${res.pageid}`}
                    >Go </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {res.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div >
            <div className='ui form'>
                <div className='ui field'>
                    <label>Enter Search Term</label>
                    <input className='input'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResult}
            </div>
        </div>
    )
}

export default Search;