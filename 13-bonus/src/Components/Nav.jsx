import React from 'react'

const Nav = (props) => {
    function changetheme(){
        if(props.theme=='light'){
            props.settheme('Dark');
        }else{
            props.settheme('light');
        }
    }
  return (
    <div>
        <p>{props.theme}</p>
        <button onClick={changetheme}>Change Theme</button>
    </div>
  )
}

export default Nav