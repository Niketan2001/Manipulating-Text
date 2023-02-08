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
            console.log("i am copy function");
            var text = document.getElementById("mybox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text copied to clipboard","success");
    }


    const [text, setText] = useState('');

    return(       
        <>
        <div className="contaner" style ={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.head}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white' }} id="mybox" rows="9"></textarea>
        </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleOnClick}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lower Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleToClear}>Clear text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleToclearWord}>Add full stop</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handlecopy}>copy text</button>
        </div>
        <div className="contaner my-2"  style ={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summery</h1>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").length-1)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter to preview the text"}</p>
        </div>
        </>
    )
}