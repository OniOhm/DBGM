import React, { useRef, useReducer, useState, useEffect } from 'react';
import card from '../data/cardTemplate';
import { formReducer, canvasReducer } from './reducers';
import NewCard from './subComponents/NewCard';

/* Contains a canvas element and a form element. the form element alters the canvas element
through hook events*/
function Carddock() {

    // multiline needs to return an array of string variables
    let sideBoxContent = true;
    var sideBox;
    var cardState = new card();
    cardState.description = "New Effect";
    cardState.name = "New Card";
    cardState.cost = "new Cost";
    cardState.type = "New Type";

    const colorRef = useRef(null);
    const focusRef = useRef(null);
    const picRef = useRef(null);
    const [state, dispatch] = useReducer(formReducer, cardState);
    if (sideBoxContent) {
        sideBox = <div className='tile is-12 is-child'>
            <div className='tabs is-toggle'>
                <ul>
                    <li className='is-active'><a>Info</a></li>
                    <li><a>Design</a></li>
                </ul>
            </div>
            <p className='title is-4'>Card Info</p>
            <p className='label is-6 has-text-black'>Oriantation</p>
            <div className='buttons'>
                <button className='button is-default'>Portraits</button>
                <button className='button is-default'>Landscape</button>
            </div>
            <div className='field'>
                <label className='label is-6 has-text-black'>Name</label>
                <div className='control'>
                    <input type='text' className='input' />
                </div>
            </div>
            <label className='label is-6 has-text-black'>Cost</label>
            <div className='field has-addons'>
                <div className='control'>
                    <input className='input' type='number' />
                </div>
                <div className='control'>
                    <a className='button is-default'>Use Asset</a>
                </div>
                <div className='control'>
                    <a className='button is-info'>Commit</a>
                </div>
            </div>
            <label className='label is-6 has-text-black'>Type</label>
            <div className='field has-addons'>
                <div className='control'>
                    <input className='input' type='text' />
                </div>
                <div className='control'>
                    <a className='button is-info'>Set Emblem</a>
                </div>
            </div>
            <div className='field'>
                <label className='label is-6 has-text-black'>Effect</label>
                <div className='control'>
                    <textarea className='textarea' />
                </div>
            </div>
            <div className='field'>
                <label className='label is-6 has-text-black'>lore</label>
                <div className='control'>
                    <textarea className='textarea' />
                </div>
            </div>
        </div>;
    }
    return (
        <div className='tile is-ancestor is-12 is-marginless'>
            <div className='tile is-parent is-8'>
                <NewCard></NewCard>
            </div>
            <div className='tile is-parent is-4 notification is-default is-vertical'>
                {sideBox}
            </div>
        </div>
    )
}

export default Carddock;

