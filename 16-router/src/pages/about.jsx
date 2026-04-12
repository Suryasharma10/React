import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const about = () => {
  const params =useParams();
  console.log(params);
  console.log(params.id);
  let navigate = useNavigate();
  const btnclicked =()=>{
    navigate('/');
  }
  return (
    <div>{params.id} : Course Id
    <button onClick={btnclicked}>click</button>
    </div>

  )
}

export default about