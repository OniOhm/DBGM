import React, { useRef, useReducer, useState, useEffect } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync, faFire,faCertificate,faEye,faHatWizard, faLeaf, faCoins, faWind, faTint } from '@fortawesome/free-solid-svg-icons';
import { CompactPicker } from 'react-color';

import { formReducer, dockReducer } from './reducers';
import NewCard from './subComponents/NewCard';
import def from '../Pub/SVG/def.png';
import DeckDock from './subComponents/DeckDock';

function Carddock() {

 
  
 
    const cardState = {
        description : "New Effect",
        name : "New Card",
        cost : "new Cost",
        type : "New Type",
        lore : "New Lore",
        oriantation : "card-portrait",
        cardPic : def,
        backgroundColor : 'grey',
        boxColor : 'white',
        textColor : 'black',
        cardEmblem : 'fa'
    }
    const dockInitState ={
        EmblemBox: false,
        sideBoxView: false,
        colorComp:'card',
        createdDeck:[]
    }

   

    const picRef = useRef(null);
    const colorRef = useRef(null);
    const [state, dispatch] = useReducer(formReducer, cardState);
    const [dockState,dockDispatch] = useReducer(dockReducer,dockInitState);
   
    return (
        <div className='tile is-ancestor is-12 is-marginless'>
           <div className='tile is-parent is-2'>
                <DeckDock
                // passing length of deckDock array
                numOfCards = {dockState.createdDeck.length}
                createdDeck = {dockState.createdDeck}
                // displayCard = {(value)=>{displayHandle(value)}}
                >
                </DeckDock>
           </div>
            <div className='tile is-parent is-6'>
                <NewCard 
                name={state.name}
                 cost={state.cost}
                 description={state.description}
                 lore={state.lore}
                 type={state.type}
                 oriantation={state.oriantation}
                 cardPic={state.cardPic}
                 backgroundColor={state.backgroundColor}
                 textColor={state.textColor}
                 boxColor={state.boxColor}
                 borderColor={state.borderColor}
                 ></NewCard>
            </div>
            <div className='tile is-parent box is-4 is-default'>
                <div className='tile is-12 is-child is-vertical'>  
                    <div className='buttons'>
                        <button className='button is-default'  onClick={()=>{dockDispatch({type:'TOGGLE_FORM_VIEW',data: true})}}>Info</button>
                        <button className='button is-default' onClick={()=>{dockDispatch({type:'TOGGLE_FORM_VIEW',data: false})}}>Design</button>
                    </div> 
                    <div hidden={dockState.sideBoxView}>
            <p className='title is-4'>Card Info</p>
            <div className='field'>
                <label className='label is-6 has-text-black'>Name</label>
                <div className='control'>
                    <input type='text' className='input' onChange={(e)=>{dispatch({type: 'NAME_CHANGE',data: e.target.value})}} />
                </div>
            </div>
            <label className='label is-6 has-text-black'>Cost</label>
            <div className='field'>
                    <input className='input' type='number' onChange={(e)=>{dispatch({type: 'COST_CHANGE',data: e.target.value})}}/>
            </div>
            <label className='label is-6 has-text-black'>Type</label>
            <div className='field'>
                <div className='control'>
                    <input className='input' type='text' onChange={(e)=>{dispatch({type: 'TYPE_CHANGE',data: e.target.value})}}/>
                </div>
            </div>
           
            <div className='field'>
                <label className='label is-6 has-text-black'>Effect</label>
                <div className='control'>
                    <textarea className='textarea' onChange={(e)=>{dispatch({type: 'DESCRIPT_CHANGE',data: e.target.value,key: e.keyCode})}}/>
                </div>
            </div>
            <div className='field'>
                <label className='label is-6 has-text-black'>lore</label>
                <div className='control'>
                    <textarea className='textarea' onChange={(e)=>{dispatch({type: 'LORE_CHANGE',data: e.target.value})}}/>
                </div>
            </div>
            </div>
            <div hidden={!dockState.sideBoxView}>
                <p className='title level-start is-4'>Card Design</p>   
            <p className='label is-6 has-text-black'>Oriantation</p>
            <div className='buttons'>
                <button className='button is-default' onClick={(e)=>{dispatch({type: 'ORIAN_CHANGE',data: 'card-portrait'})}}>Portrait</button>
                <button className='button is-default'  onClick={(e)=>{dispatch({type: 'ORIAN_CHANGE',data: 'card-landscape'})}}>Landscape</button>
            </div>
            <label className='label is-6 has-text-black'>Card Picture</label>
            <div className='level'> 
                    <input type='text' className='input' ref={picRef} />
            <div className='control'>
                    <a className='button is-info' onClick={(e)=>{dispatch({type:'PIC_CHANGE',data: picRef.current.value})}}>Commit</a>
                    </div>
            </div>
            <label className='label is-6 has-text-black'>Card Emblem</label>
             <div className='level'>
                 <div className='level-start'>
                    <button className='button is-default'><FontAwesomeIcon icon={faFire}></FontAwesomeIcon></button>
                    <button className='button is-default'><FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon></button>
                    <button className='button is-default'><FontAwesomeIcon icon={faWind}></FontAwesomeIcon></button>
                    <button className='button is-default'><FontAwesomeIcon icon={faTint}></FontAwesomeIcon></button>
                    <button className='button is-default'><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></button>
                    <button className='button is-default'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                    <button className='button is-default'><FontAwesomeIcon icon={faCoins}></FontAwesomeIcon></button>
                    <button className='button is-default'><FontAwesomeIcon icon={faHatWizard}></FontAwesomeIcon></button>
                 </div>
                 <div className='level-end'>
                     <button className='button is-info'>Set</button>
                 </div>
             </div>
             <label className='label is-6 has-text-black'>Colors</label>
                <div className='level'>
                   <div className='select'>
                        <select ref={colorRef} onChange={(e)=>{dockDispatch({type:'COLOR_COMP_CHANGE',data: e.target.value})}}>
                            <option value='card'>Card</option>
                            <option value='box'>Box</option>
                            <option value='text'>Text</option>
                            <option value='border'>border</option>
                        </select>
                   </div>
                    <CompactPicker
                    className='level-end'
                    color={state.backgroundColor}
                    onChangeComplete={(color)=>{dispatch({type: 'COLOR_CHANGE',data: color.hex,component: dockState.colorComp })}}
                    />
                </div>
            <div className='level'></div>
            <div className='level'>
                <button className='button is-link level-item level-end' onClick={(e)=>{dockDispatch({type:"ADD_TO_DECKDOCK",data: state})}}>Save</button>
                <button className='button level-item is-warning'  onClick={(e)=>{dispatch({type:'RESET_DESIGN'})}}><FontAwesomeIcon icon={faSync}/></button>
            </div>
            </div>
   
                </div>
            </div>
            
        </div>
    )
}

export default Carddock;

