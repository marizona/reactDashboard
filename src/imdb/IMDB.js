
import React, { useState} from 'react';
import  './style.css';
import axios from 'axios';
import Search from './components/Searchs';
import Results from './components/Results';
import Popup from './components/Popup';
import {Card} from 'react-bootstrap';
import logo from './logo.png';
import Draggable from "react-draggable";

function IMDB() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}

  });

  const apiurl = "http://www.omdbapi.com/?apikey=9cbca29b";

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.s).then(({data}) =>{
        let results = data.Search;

        setState(prevState => {
          return {...prevState, results: results}
        });
      }).catch(err => console.log(err));
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s}
    });

  }

  const openPopup = id => {
    axios(apiurl + '&i=' + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected:result }
        
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <Draggable>
    <div className="IMBD-card">
      <Card style={{ width: '40rem', height:'30em' }}> 
  <Card.Img variant="top" src={logo} className="logo" style={{ width: '50%' }}/>
  <Card.Body>
  <Search handleInput={handleInput} search={search} />
    <Card.Text>
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup} /> : false }
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    </Draggable>
  );
}

export default IMDB;
