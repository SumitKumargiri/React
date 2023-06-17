import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleclick=()=>{
        console.log("upper case click"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handlechange=(event)=>{
        console.log("On changed");
        setText(event.target.value);
    }

    const[text,setText]=useState('Enter the Text Here');
    // setText('new text');
  return (
    <>
    <div className='container'>
      <form>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label className="form-label">Text Analysis</label>
            <textarea type="email" className="form-control" value={text} onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        {/* <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div> */}
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
      </form>
      </div>

      <div className="container">
        <h1>your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} Minutes read</p>
      </div>
      </>
  )
}
