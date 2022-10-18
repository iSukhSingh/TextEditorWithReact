import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here'); 
  // setText("new text");
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    setText("You have clicked on handleUpClick")
}
const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
}

  return (
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Covert to Uppercase</button>
    </div>

  )
}
