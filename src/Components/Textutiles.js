import React, { useState } from 'react'

export default function Textutiles(props) {
    const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
    console.log("Copied...")
}
    const Uppercase = (event) => {
        let newText = text.toLowerCase();
        handleCopy(newText);
        setText(newText)
    }

    const LowerCase =()=>{
        let newText = text.toUpperCase();
        handleCopy(newText);
        setText(newText)
    }
    const Remvoespace = ()=>{
        let removespace =  text.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, ''); 
        handleCopy(removespace);
        setText(removespace);
    }
    const clicktoonchange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text Here...')
    return (
        <div>
            <div className="my-4">
                <h1>{props.headline}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" value={text} placeholder={text} onChange={clicktoonchange}></textarea>
                <button type="button" className="btn btn-primary mt-3" onClick={Uppercase}>Convert to LowerCase</button>
                <button type="button" className="btn btn-secondary mt-3 ms-3" onClick={LowerCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-success mt-3 ms-3" onClick={Remvoespace}>Convert Space to '-' </button>
            </div>
        </div>
    )
}
