import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here'); 
  // setText("new text");
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText)
}
const handleDownClick = () => {
    console.log("lowercase was clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText)
}
const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
}

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      
      <button className="btn btn-primary" onClick={handleUpClick}>Covert to Uppercase</button>
      <button className="btn btn-primary my-3" onClick={handleDownClick}>Covert to Lowercase</button>
    </div>
    <div className='container my-3'>
    <h1>Your Input Summary</h1>
    <p>You have used {text.split(" ").length-1} words</p>
    <p>You have used {text.length} letters</p>
  </div>
    </>

  )
}
