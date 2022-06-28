import React, { useEffect, useState } from 'react'

 const useEffect = () => {

const[num,setNum] = useState(0);
const[number,setNumber] = useState(0);

useEffect (() => {
    alert ("Yes you are right")
    console.log("Yes you are right");
},[number]);
useEffect (() => {
    alert ("Yes are wrong")
    console.log("You are wrong");
},[num]);



  return(
    <div className='all'>
        <h1 className='ttoi'>UseEffect</h1>

 <h2>Q- Capital of India</h2>
    <div >
        
        <h3>1-Uttar-Pradesh</h3>
        <button className='st_button'  onClick={() => (setNum(num+1))} >Option   {num}</button>
        </div>
        <div >
            <h3>2-Delhi</h3>
        <button className='nd_button' onClick={() => (setNumber(number+1))} >Option   {number}</button>
        </div>
        </div>
        
  
)};


export default UseEffect;
