import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faScroll } from '@fortawesome/free-solid-svg-icons';


function DeckDock(props){


   
    
    const deck = props.createdDeck.map((element)=>
        <div key={element.name} style={{backgroundColor: element.backgroundColor}} className ='button level is-link is-small is-marginless'>
                <p className='level-start'>{element.name}</p>
                <p className='level-end'>{element.type}</p>
        </div>
    );
    return(
        <div className='tile is-parent is-vertical notification is-default'>
            <div className='level'>
                <p className='level-start'>Deck environment</p>
                <FontAwesomeIcon className='level-end' icon={faLayerGroup}></FontAwesomeIcon>
            </div>
            <div className='level'>
                <p className='level-start'>Number of cards</p>
                    <div className='level-end'>
                    <p className='level-item'>{props.numOfCards}</p>
                    <FontAwesomeIcon className='level-item' icon={faScroll}></FontAwesomeIcon>
                    </div>
            </div>
            <div className='tile is-child is-vertical'>
            {deck}
            </div>
        </div>
    );
}

export default DeckDock;