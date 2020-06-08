import React from 'react';
import unsplash from '../api/unsplash';

const Dropdown = () => {
    return (
        <div className="ui selection dropdown">
            <input type="hidden" name="Categories"/>
            <i className="dropdown icon"></i>
            <div className="default text">Categories</div>
            <div className="menu">
                <div className="item" data-value="1">Male</div>
                <div className="item" data-value="0">Female</div>
            </div>
        </div>
    );
}

export default Dropdown;