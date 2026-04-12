import React from 'react'

const scroll = () => {
   const pageScrolling =(e)=>{
    //console.log("Page Scrolling");
    if(e.deltaY>=0){
        console.log("Sidha Scrolling",e.deltaY);
    }else{
        console.log("Ulta Scrolling",e.deltaY);
    }   
   }
  return (
    <div onWheel={(e)=>{
        //console.log("x",e.deltaX);
        pageScrolling(e);
    }}>
        <div className="page1">Page1</div>
        <div className="page1">Page2</div>
        <div className="page1">Page3</div>
    </div>
  )
}

export default scroll