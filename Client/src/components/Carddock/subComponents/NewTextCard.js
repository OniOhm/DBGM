import React,{useRef,useEffect} from 'react';


function TextCard(props) {





const cardColor = {
  backgroundColor: props.backgroundColor,
  borderColor: 'solid '+ props.borderColor
}
const boxProperty ={
  backgroundColor: props.boxColor,
  color: props.textColor
}
// full art implimtation
const picProperty={
  backgroundImage:  "url(props.cardPic)"
}
// controls for card emblem changes



 

    return (
        <div className={props.oriantation} style={cardColor}>
          <div className='card-top' style={boxProperty}>
            <p className='margin-handle'>{props.name}</p>
            <div className='margin-handle level'>
              <p className='marginless paddingless'>{props.cost}</p>
              <img className='image' src={props.cardEmblem} />
            </div>
          </div>
          <div className='card-text-description' style={boxProperty}>
              <textarea id='descript-Box' style={boxProperty} value={props.description} readOnly />   
          </div>
          
        </div>

    )
}

export default TextCard;
