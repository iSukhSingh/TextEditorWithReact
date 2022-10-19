import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState(''); 
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
const clearText = () => {
    console.log("lowercase was clicked");
    let newText = ("");
    setText(newText)
}

const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
}
const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}


  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Covert to Lowercase</button>
      <button className="btn btn-info my-3 mx-2" onClick={handleCopy}>Copy your text</button>
      <button className="btn btn-danger my-3 mx-2" onClick={clearText}>clear Text</button>

    </div>
    <div className='container my-3'>
    <h2>Your Input Summary</h2>
    <p1>You have used {text.split(" ").length-1} words</p1>
    <p>You have used {text.length} letters</p>
    <p>it will take about {0.008 * text.split(" ").length} minutes to read</p>
  </div>
    </>

  )
}
