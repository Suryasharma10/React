import React from 'react'

const App = () => {
  // localStorage.clear();
  // localStorage.setItem("1","Surya");
  // localStorage.setItem("2","Kartik");
  // // sessionStorage.clear();
  // //localStorage.removeItem(1);
  // const localDataIdx = localStorage.getItem("1");
  // const localDataName = localStorage.getItem("2");
  // console.log(localDataIdx,localDataName);

  const user = {
    username : "Surya",
    age : 23,
    section : "A3",
    college : "KCC"
  }
  console.log(user);
  localStorage.setItem("User",JSON.stringify(user));
  console.log(typeof(user));
  const Original = localStorage.getItem('User');
  console.log(Original);
  console.log(typeof(Original));
  const convert = JSON.parse(localStorage.getItem('User'));
  console.log(convert);
  console.log(typeof(convert));
  return (
    <div></div>
  )
}

export default App