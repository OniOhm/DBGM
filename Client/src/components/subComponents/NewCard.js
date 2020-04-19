import React from 'react';

function Card(props) {




    return (
        <div className={props.oriantation}>
            <div className='level  notification is-default is-paddingless is-marginless'>
                <p className='level-left'>{props.name}</p>
                <p className='level-right'>{props.cost}</p>
            </div>
            <div className='level is-paddingless is-marginless'>
               <div className='level-item'>
               <img className='image  is-128x128' src={props.cardPic} alt='card image goes here'></img>
               </div>
            </div>
            <div className='level  notification is-default is-paddingless is-marginless'>
                <p className='is-italic'>{props.type}</p>
            </div>
            <div className='notification is-default is-paddingless'>
            <div id='descript-Box' className='level notification is-default is-paddingless'>
                <p>{props.description}</p>
            </div>
            <div className='level'>
                    <p className='is-italic has-text-left level-item level-right'>"{props.lore}"</p>
                </div>
                </div>
        </div>

    )
}

export default Card;