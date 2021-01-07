import React from 'react';

function Search ({handleInput, search}) {
    return (
        <section className="searchebox-wrap">
            <input 
                type="text" 
                placeholder="Find a movie" 
                className="searchbox" 
                onChange= {handleInput}
                onKeyPress= {search}
            />
        </section>
    )
}

export default Search;