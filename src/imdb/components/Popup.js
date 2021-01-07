import React from 'react';

function Popup({selected, closePopup }) {
    return (
        
        <section className="popup">
            <button className="close" onClick={closePopup}>X</button>
            <div className="content">
                <h2>{selected.Title}</h2>
                <p className='year'>{selected.Year}</p>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} alt="movie poster"/>
                    <p>{selected.Plot}</p>
                </div>
                

            </div>

        </section>
    )
}

export default Popup;