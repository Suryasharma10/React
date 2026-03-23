import React from 'react'
const card = (props) => {
   console.log(props.user,props.age);
  return (
        <div className='card1'>
        <img src={props.img} alt="3d_image" />
      <h2>{props.user} , {props.age}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sint impedit?</p>
      <button>View</button>
    </div>
  )
}

export default card