import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faScroll,faShareSquare } from '@fortawesome/free-solid-svg-icons';


function DeckDock(props){


   
    
    const deck = props.createdDeck.map((element)=>
        <div key={element.name} style={{backgroundColor: element.backgroundColor}} onClick={(e)=>{props.displayCard(element)}} className ='button level is-link is-small is-marginless'>
  
              <figure className=''>
                <img  src={element.cardEmblem}/>
                </figure>
            
        </div>
    );
    return(
        <div className='tile is-parent is-vertical notification is-default is-3'>
            <div className='level'>
                <FontAwesomeIcon className='level-item' icon={faLayerGroup}></FontAwesomeIcon>
            </div>
            <div className='level'>
                    <div className='level-item'>
                    <p className='level-item'>{props.numOfCards}</p>
                    </div>
            </div>
                <hr></hr>
            <div className='tile is-child is-vertical'>
            {deck}
            </div>
        </div>
    );
}

export default DeckDock;