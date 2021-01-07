import React from 'react';
import { NewsContextProvider} from './NewsContext';
import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';

function Test() {
    return (
        
        <div>
            <NewsContextProvider>
            <News />
            </NewsContextProvider>
            

        </div>
    )
}

export default Test;