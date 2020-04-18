import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Deckentry from './subComponents/Deckentry';

function Deckbox() {
    return (
        <div>
            <div className='level'></div>
            <div className='tile is-ancestor'>
                <div className='tile is-parent is-2 is-hidden-mobile'></div>
                <div className='tile is-parent is-vertical is-8'>
                    <div className='level'>
                        <p className='title is-4 level-item level-left'>Deckbox</p>
                    </div>
                    <div className='tile notification is-default is-child'>
                        <div className='field'>
                            <input className='input' type='text' placeholder='Search(use # to search by keyword)' />

                        </div>
                        <div className='level'>
                            <div className='level-item buttons'>
                                <button className=' button is-link'>Create New Deck <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                            </div>
                        </div>
                        <Deckentry></Deckentry>
                    </div>

                </div>
                <div className='tile  is-parent is-2 is-hidden-mobile'></div>
            </div>
        </div>



    );
}

export default Deckbox;