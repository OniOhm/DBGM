import React, { useRef, useReducer, useState, useEffect } from 'react';
import card from '../data/cardTemplate';
import { formReducer } from './reducers';
import NewCard from './subComponents/NewCard';
import def from '../Pub/SVG/def.png';

function Carddock() {

 
  
    var cardState = new card();
    cardState.description = "New Effect";
    cardState.name = "New Card";
    cardState.cost = "new Cost";
    cardState.type = "New Type";
    cardState.lore = "New Lore";
    cardState.oriantation = "card-landscape";
    cardState.cardPic = def;



    const colorRef = useRef(null);
    const focusRef = useRef(null);
    const picRef = useRef(null);
    const [state, dispatch] = useReducer(formReducer, cardState);
    const [sideBoxContent,sideBoxChange] = useState(true);
    
    return (
        <div className='tile is-ancestor is-12 is-marginless'>
            <div className='tile is-parent is-8'>
                <NewCard name={state.name} cost={state.cost} description={state.description} lore={state.lore} type={state.type} oriantation={state.oriantation} cardPic={state.cardPic}></NewCard>
            </div>
            <div className='tile is-parent is-4 notification is-default'>
                <div className='tile is-12 is-child is-vertical'>  
                    <div className='buttons'>
                        <button className='button is-default'  onClick={()=>{sideBoxChange(true)}}>Info</button>
                        <button className='button is-default'  onClick={()=>{sideBoxChange(false)}}>Design</button>
                    </div> 
                    <div hidden={!sideBoxContent}>
            <p className='title is-4'>Card Info</p>
            <div className='field'>
                <label className='label is-6 has-text-black'>Name</label>
                <div className='control'>
                    <input type='text' className='input' onChange={(e)=>{dispatch({type: 'NAME_CHANGE',data: e.target.value})}} />
                </div>
            </div>
            <label className='label is-6 has-text-black'>Cost</label>
            <div className='field has-addons'>
                <div className='control'>
                    <input className='input' type='number' onChange={(e)=>{dispatch({type: 'COST_CHANGE',data: e.target.value})}}/>
                </div>
                <div className='control'>
                    <a className='button is-default'>Use Asset</a>
                </div>
                <div className='control'>
                    <a className='button is-info'>Commit</a>
                </div>
            </div>
            <label className='label is-6 has-text-black'>Card Picture</label>
            <div className='field has-addons'>
                <div className='control'>
                    <input type='text' className='input' ref={picRef} />
                </div>
                <div className='control'>
                    <a className='button is-info' onClick={(e)=>{dispatch({type:'PIC_CHANGE',data: picRef.current.value})}}>Commit</a>
                    </div>
            </div>
            <label className='label is-6 has-text-black'>Type</label>
            <div className='field has-addons'>
                <div className='control'>
                    <input className='input' type='text' onChange={(e)=>{dispatch({type: 'TYPE_CHANGE',data: e.target.value})}}/>
                </div>
                <div className='control'>
                    <a className='button is-info'>Set Emblem</a>
                </div>
            </div>
            <div className='field'>
                <label className='label is-6 has-text-black'>Effect</label>
                <div className='control'>
                    <textarea className='textarea' onChange={(e)=>{dispatch({type: 'DESCRIPT_CHANGE',data: e.target.value})}}/>
                </div>
            </div>
            <div className='field'>
                <label className='label is-6 has-text-black'>lore</label>
                <div className='control'>
                    <textarea className='textarea' onChange={(e)=>{dispatch({type: 'LORE_CHANGE',data: e.target.value})}}/>
                </div>
            </div>
            </div>
                <div hidden={sideBoxContent}>
            <p className='title is-4'>Card Design</p>
            <p className='label is-6 has-text-black'>Oriantation</p>
            <div className='buttons'>
                <button className='button is-default' onClick={(e)=>{dispatch({type: 'ORIAN_CHANGE',data: 'card-portrait'})}}>Portrait</button>
                <button className='button is-default'  onClick={(e)=>{dispatch({type: 'ORIAN_CHANGE',data: 'card-landscape'})}}>Landscape</button>
            </div>
            </div>
   
                </div>
            </div>
        </div>
    )
}

export default Carddock;

