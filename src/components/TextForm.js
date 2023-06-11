import React, { useState } from 'react'

export default function TextForm(props) {
  const clickMe=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Uppercase","success")
    
  }
  const clickMe2=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to Lowercase","success")
    
  }
  const clearMe=()=>{
    let newText='';
    setText(newText);
    props.showAlert(": Text Cleared","success")
     
  }
  
  const changeMe=(event)=>{
    
    setText(event.target.value)
  }
  const[text,setText]=useState("I am some text");
  // setText("Hey")
  return (
    <>
      <div className="container"  >
      <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
  <textarea className="form-control" rows="8" value={text} onChange={changeMe}></textarea>
</div>
<button className='btn btn-primary mx-3'  onClick={clickMe}>ToUpperCase</button>
<button className='btn btn-primary' onClick={clickMe2}>ToLowerCase</button>
<button className='btn btn-primary mx-3'  onClick={clearMe}>ClearText</button>
    </div>

    <div className='container my-3'>
      <h2>Summary of your text</h2>
      <p id='count'>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} reading time</p>
      <h2 >Preview</h2>
      <p>{text.length>0?text:"Enter something to preview.."}</p> 

    </div>
    </>
  )
}
