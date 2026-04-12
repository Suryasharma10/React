import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
    const [nName, setnName] = useState('Click to get Name')
    const [image, setimage] = useState('image')
    async function GetDATA() {
        const data = await axios('https://jsonplaceholder.typicode.com/todos/8');
        console.log(data.data.title);
        const title = data.data.title;
        setnName(title);
    }
  return (
    <div>
        <div className="b1">
        <p>{nName}</p>
        <button onClick={GetDATA}>Get Data</button>
        </div>
        <br></br><br></br>
        {/* <div className="b2">
            <img src={image}alt='image'></img>
            <br></br><br></br>
            <button onClick={GetImage}>image</button>
        </div> */}
    </div>
  )
}

export default App