import React from 'react'
import { useState } from 'react'

export const PasswordGenerator = () => {
const [length,setLength]=useState(8);
const[upper,setUpper]=useState(true);
const[lower,setLower]=useState(true);
const[number,setNumber]=useState(true);
const[symbol,setSymbol]=useState(true);
const[password,setPassword]=useState("");


const generatePassword = () =>{
     let charSet="";
     if(upper) charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     if(lower) charSet+="abcdefghijklmnopqrstuvwxyz";
     if(number) charSet+="0123456789";
     if(symbol) charSet+="!@#$%^&*()-_=+";
     let generatePassword ="";
     for(let i=0;i<length;i++){
      const randomIndex=Math.floor(Math.random()*charSet.length);
      generatePassword+=charSet[randomIndex];
     }
     setPassword(generatePassword);
    
    }

  const copyToClipboard = () =>{
    navigator.clipboard.writeText(password);
    alert("Password Copied");
  }

  return (
    <div className='password-generator'>
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label>Password Length:</label>
        <input type="number"  id="num" placeholder='Enter Password Length' value={length} onChange={(e)=>setLength(parseInt(e.target.value))} />
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id='upper' checked={upper} onChange={(e)=>setUpper(e.target.checked)} />
        <label htmlFor="upper">Include UpperCase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id='lower' checked={lower} onChange={(e)=>setLower(e.target.checked)} />
        <label htmlFor="lower">Include LowerCase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id='numbers' checked={number} onChange={(e)=>setNumber(e.target.checked)}/>
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id='symbol' checked={symbol} onChange={(e)=>setSymbol(e.target.checked)} />
        <label htmlFor="symbol">Include Symbol</label>
      </div>
      <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
      <div className="generate-password">
         <input type="text" readOnly value={password} />
         <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
      </div>
    </div>
  )
}
