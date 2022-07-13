import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <button className="ui button">Search</button>
            </form>
        </div>
    )
}


export default SearchBar;