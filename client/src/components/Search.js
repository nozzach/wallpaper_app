import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {

    const [image, setImage] = useState("");
    const [clientId, setClientId] = useState("SEhOmbkdYkkVyIqJXIF7-civ6r_t-39EEwAnVV-Pfjw");
    const [result, setResult] = useState([]);

    function handleChange (event) {
        setImage(event.target.value);
    }

    function handleSubmit (event) {
        console.log(image);
        const url = "https://api.unsplash.com/search/photos?page=1&query="+image+"&client_id="+clientId;

        axios.get(url)
        .then((response) => {
            console.log(response);
            setResult(response.data.results);
        });
    }

    return (
        <div className="ui input">
            <input onChange={handleChange} type="text" placeholder="Search for wallpapers"/>
            <button onClick={handleSubmit} type="submit">Search</button>
            {result.map((photo)=> (
                <img src={photo.urls.small} />
            ))}
        </div>     
    );
}

export default Search;