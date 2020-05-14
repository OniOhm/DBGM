import React,{useRef,useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync , faFire as fire,faCertificate as attack,faEye as sneak,faHatWizard as spell, faLeaf as earth, faCoins as coin, faWind as wind, faTint as warter } from '@fortawesome/free-solid-svg-icons';
function Card(props) {

// style={{ backgroundColor: '#2f2f2f' }} for inline styling
var emblem;


const cardColor = {
  backgroundColor: props.backgroundColor,
  borderColor: 'solid '+ props.borderColor
}
const boxProperty ={
  backgroundColor: props.boxColor,
  color: props.textColor
}
const picProperty={
  backgroundImage:  new URL(props.cardPic)
}
// constrols for card emblem changes
  switch(props.cardEmblem){
    case 'FIRE':
      emblem = fire;
    default:
      emblem = spell;
  }


 

    return (
        <div className={props.oriantation} style={cardColor} >
          <div className='card-top' style={boxProperty}>
            <p className='margin-handle'>{props.name}</p>
            <p className='margin-handle'>{props.cost}<span><FontAwesomeIcon icon={emblem}></FontAwesomeIcon></span></p>
          </div>
          <div className='card-image-container' style={picProperty}>
                <img className='card-img' src={props.cardPic} style={boxProperty} />
          </div>
          <div className='card-type' style={boxProperty}>
                <p className='margin-handle'>{props.type}</p>
          </div>
          <div className='card-description' style={boxProperty}>
              <textarea id='descript-Box' style={boxProperty} value={props.description} readOnly />   
          </div>
          
        </div>

    )
}

export default Card;
