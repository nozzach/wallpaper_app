import React, { useState } from 'react';
import Title from './Title.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import Dropdown from './Dropdown';
import unsplash from '../api/unsplash';

const App = () => {

    const [resource, setResource] = useState('Images');


    return (
        <div className = "App">
            <Title />
            <Search />
            <Dropdown/>
        </div>
    )
}

export default App;