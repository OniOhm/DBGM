import React,{useRef,useEffect} from 'react';


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
