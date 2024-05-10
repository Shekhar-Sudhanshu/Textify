import React, { useState } from "react";


const Textform = (props) => {
    const [text, setText] = useState("");
    
    const convertUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    };

    const convertLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    };

    const convertTitle = () => {
        let newText = '';
        let textwords = text.toLowerCase().split(' ');
        textwords.forEach((val) => {
            if(val===''){
                newText+=' ';
            }
            else if(val!== ''){
                newText += val[0].toUpperCase() + val.slice(1, val.length);
                newText += ' ';
            }
        });
        newText = newText.trim();
        setText(newText);
        props.showAlert("Converted to Titlecase!","success");
    };

    const clearContent = () => {
        setText('');
        props.showAlert("Text Cleared!","success");
    };

    const reverseString = () => {
        let newText = '';
        let words = text.split(' ');
        if(words.length>1){
            words.reverse();
            words.forEach((val) => {
                newText += val + " ";
            });
            newText = newText.trim();
        }
        else{
            for(let i=words[0].length-1; i>=0; i--){
                newText += words[0][i];
            }
        }
        setText(newText);
        props.showAlert("Text Reversed!","success");
    };

    const copyText = () => {
        let text = document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to Clipboard!","success");
    };

    const removeExtraSpaces = () => {
        let newText = "";
        let words = text.split(" ");
        words.forEach((val) => {
            if(val !== ''){
                newText += val.trim() + " ";
            }
        });
        newText = newText.trim();
        setText(newText);
        props.showAlert("Extra Spaces Removed!","success");
    };

    const handleText = (event) => {
        setText(event.target.value);
    };

    const lengWords = () => {
        if(text==='') return 0;
        let words = text.split(" ");
        let lenth = 0
        for(let i of words){
            if(i!==''){
                lenth+=1;
            }
        }
        return lenth;
    };

    const lengChar = () => {
        if(text==='') return 0;
        let words = text.split(" ");
        let lenth = 0
        for(let i of words){
            if(i!==''){
                lenth+=i.length;
            }
        }
        return lenth;
    };
    
    return(
        <>
        <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleText} value={text} id="myBox" rows="8" style={{backgroundColor: props.mode==="dark"?"#0e0e0e":"white",
            color: props.mode==="light"?"#0e0e0e":"white", border: props.mode==="light"?"1px solid black":"1px solid white"}}></textarea>
            </div>
            <button className="btn btn-primary mx" onClick={convertUpper}>CONVERT TO UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={convertLower}>convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={convertTitle}>Convert To Titlecase</button>
            <button className="btn btn-primary mx-3" onClick={reverseString}>Reverse Text</button>
            <button className="btn btn-primary mx-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={clearContent}>Clear</button>
        </div>
        <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
            <h2>Text Summary</h2>
            <p>{lengWords()} words and {lengChar()} characters</p>
            <p>{0.008 * lengWords()} Minutes read</p>
            <h2>Text Preview</h2>
            <p>{lengChar()>0?text:"Enter something in the box to preview"}</p>
        </div>
        </>
    )
}

export default Textform