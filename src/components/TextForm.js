import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopy = () =>{
      let text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const clearText = () =>{
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
       
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter your text here' id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear text</button>

        </div>

        <div className='container my-4'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>It take your time to read {0.008 * text.split(" ").length} Minutes</p>

            <h2>Preview</h2>
            <p>{text}</p>
        
        
        </div>
        </>
    )
}
