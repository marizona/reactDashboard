import React from 'react';
import Result from './Result';

function Results({ results, openPopup, error }) {
    if(!results) {
        let error
        error = <p className="notfound">Result not found :-(</p>;
        return error;
    }

    return (
        <section className="results">
            {results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
            { error}
        </section>
    )
}

export default Results;