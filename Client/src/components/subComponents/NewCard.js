import React,{useRef,useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHatWizard} from '@fortawesome/free-solid-svg-icons';
function Card(props) {

// style={{ backgroundColor: '#2f2f2f' }} for inline styling



const cardColor = {
 
  backgroundColor: props.backgroundColor,
  borderColor: 'solid '+ props.borderColor
}
const boxProperty ={
  backgroundColor: props.boxColor,
  color: props.textColor
}


 

    return (
        <div className={props.oriantation} style={cardColor} >
          <div className='card-top' style={boxProperty}>
            <p className='margin-handle'>{props.name}</p>
            <p className='margin-handle'>{props.cost}<span><FontAwesomeIcon icon={faHatWizard}></FontAwesomeIcon></span></p>
          </div>
          <div className='card-image-container'>
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

{/* <div className='level  notification is-default is-paddingless is-marginless'>
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
<div className='level'>
    <p>{props.description}</p>
</div>
<div className='level'>
    <p className='is-italic has-text-left level-item level-right'>"{props.lore}"</p>
</div>
</div> */}