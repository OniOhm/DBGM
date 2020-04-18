import React from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Deckentry() {
    return (
        <div className='tile notification is-link is-child is-parent'>
            <div className='level'>
                <p className='title is-marginless is-5 level-left'>DeckName</p>
                <FontAwesomeIcon icon={faCog} className='image is-24x24'></FontAwesomeIcon>
            </div>
            <div className='level'>
                <div className='tile notification is-danger is-child is-10 '>
                    <div className='level'>
                        <p className='title is-6'>Summary</p>
                    </div>
                    <div className='content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, magna eget ultricies facilisis, sem risus vehicula diam, non suscipit tortor erat et mi. Vestibulum vitae scelerisque nulla, ornare interdum nisl. Curabitur mollis diam ante, non semper est congue sed. Phasellus auctor, nunc sit amet efficitur egestas, risus quam maximus ex, sit amet venenatis justo velit dapibus urna.</p>
                    </div>
                </div>
                <div className='tile is-child is-parent is-vertical notification is-default is-2 has-text-black'>
                    <div className='level'>
                        <p className='title is-6'>Stats</p>
                    </div>
                    <div className='tile is-child'>
                        <p>Details: 5</p>
                    </div>
                    <div className='tile is-child'>
                        <p>Details: 6</p>
                    </div>
                    <div className='tile is-child'>
                        <p>Details: <span className='tag is-black'>#DBM</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Deckentry;