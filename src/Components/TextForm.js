import React,{useState} from "react";

export default function TextForm(props){
    
    const handleOnClick =() =>{
                      
            let newtext = text.toUpperCase();
            setText(newtext);
            props.showAlert("Converted to upper case","success");
    }
    const handleLowClick =() =>{
                  
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case","success");
}
const handleToClear =() =>{
            let newtext = " ";
            setText(newtext);
            props.showAlert("Text cleared","success");
   
}
const handleToclearWord =() =>{
            let newtext = text +".";
            setText(newtext);
            props.showAlert("Full stop added","success");
    
}
    const handleOnChange =(event) =>{
        
        setText(event.target.value);
}
    const handlecopy =()=>{
           
            
            navigator.clipboard.writeText(text);
            document.getSelection().removeAllRanges();
            props.showAlert("Text copied to clipboard","success");
    }


    const [text, setText] = useState('');

    return(       
        <>
        <div className="contaner" style ={{color: props.mode==='light'?'black':'white'}}>
        <h1 className="mb-4">{props.head}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white' }} id="mybox" rows="9"></textarea>
        </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleOnClick}>Convert to Upper Case</button>
            <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lower Case</button>
            <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handleToClear}>Clear text</button>
            <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handleToclearWord}>Add full stop</button>
            <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handlecopy}>copy text</button>
        </div>
        <div className="contaner my-2"  style ={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").length-1)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter to preview the text"}</p>
        </div>
        </>
    )
}