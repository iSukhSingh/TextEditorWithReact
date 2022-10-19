import React, { useState } from 'react'

export default function About(props) {

const[myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
})
const [btntext, setBtnText] = useState("Enable dark mode")
const toogleStyle = () => {
    if (myStyle.color === "white") {
        setMyStyle({
            color: "black",
            backgroundColor: "white",
            border: '4px solid white'
        })
        setBtnText("Enable dark mode")
    }
    else{
      setMyStyle({
            color: "white",
            backgroundColor: "black",
        })
        setBtnText("Enable light mode")

    }
}
  return (
    <>
    
 <div className='container' style={{color: props.mode==='dark'?'black':'#042743'}}>
    <h1>about us</h1>
        <div className='container' id="accordionExample">
      <div className='accordion-item'>
        <h2 className="accordion-header" id="headingOne">
          <button style={{color: props.mode==='dark'?'black':'#042743'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>This is the first item's accordion body.</strong> It is shown by default
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default
          </div>
        </div>
      </div>
  <div>
      <button onClick={toogleStyle} type="button" className="btn btn-dark">{btntext}</button>
  </div>
</div>
</div>
    </>
  )
}
