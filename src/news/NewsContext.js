import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = 'http://newsapi.org/v2/everything?domains=lemonde.fr&apiKey=8d459dea89ba417dade27ccaf780a285';

    useEffect(() => {
        axios.get(apiKey).then((response) => setData(response.data)).catch((error) => console.log(error));
        
    }, []);


    return(
        <NewsContext.Provider value={{ data }}>
            { props.children }
        </NewsContext.Provider>
    )
}

