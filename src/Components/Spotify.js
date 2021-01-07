import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import axios from 'axios';
import Player from "./Player.js";
import "./Spotify.css";
import Draggable from 'react-draggable';


const client_id = "928533111291479494d058741941718e";
const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];
let base_url = "https://api.spotify.com/v1/";
const login_url = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/widgets&scope=${scopes.join("%20")}&response_type=token&state=token&show_dialog=true`;

function Spotify({ spotifyState, setSpotifyState }) {
    const [token, setToken] = useState(null);
    const [tokenType, setTokenType] = useState("Bearer");

    const [playlists, setPlaylists] = useState(null);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("spotifyToken"));
        if (token) setToken(token);
    }, [])

    useEffect(() => {
        localStorage.removeItem("spotifyToken");
        if (token) localStorage.setItem("spotifyToken", JSON.stringify(token))

    }, [token])

    useEffect(() => {
        const { access_token, token_type } = queryString.parse(window.location.hash);

        if (!access_token) return;
        setToken(access_token);

        if (!token_type) return;

        setTokenType(token_type)
    }, []);


    useEffect(() => {
        if (!token) return;
        axios(base_url + "me/player/currently-playing?market=from_token&additional_types=track%2Cepisode", {
            method: 'GET',
            headers: {
                'Authorization': `${tokenType} ${token}`
            }
        })
        .then(({ data }) => {
            console.log(data)
            if (data) {
                setSpotifyState({
                    item: data.item,
                    is_playing: data.is_playing,
                    progress: data.progress_ms
                })
            } 
            //setUser({
            //name : data.display_name,
            // country : data.country,
            // email : data.email
            //})
        })
    }, [token]);

    const login = () => {
        window.location.href = login_url;
    }
    const logout = () => {
        localStorage.removeItem("spotifyToken")
        setSpotifyState(null);
        setToken(null)
        window.location.href = "http://localhost:3000/widgets";
    }

    // useEffect(() =>{
    //     if(!token) return;
    //     console.log('"WE ARE GONNA FETCH PLAYLISTS')
    //     axios(base_url+ "me"  , {
    //         method: 'GET',
    //         headers : {
    //             'Authorization' : `${tokenType} ${token}`
    //         }
    //     })
    //     .then(({data}) =>
    //         {
    //     console.log(data)

    //             setPlaylists({})}
    //     )

    // },[token]);

    return (
        <weather>
            <Draggable>
                <div className="contaner">
            {!token ?
                <button className="btn" onClick={login}>Login to Spotify</button>
                : <button className="btn" onClick={logout}>Logout of Spotify</button>
            }
            </div>
            </Draggable>
            {spotifyState &&
                <Player 
                    item={spotifyState.item}
                    is_playing={spotifyState.is_playing}
                    progress_ms={spotifyState.progress}
                />
            }

        </weather>
    )
}

export default Spotify;