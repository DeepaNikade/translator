import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("hi");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  

  async function getTranslatedData() {
    try {
      // to convert from string to encoded format we use URLSearchParams
      const encodeData = new URLSearchParams();
      // append the data with key and value
      encodeData.append("source_language", source);
      encodeData.append("target_language", target);
      encodeData.append("text", text);

      const option = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'a030b08041msh4b96922e0ba3348p190f4cjsn7f79defc66b0',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data:encodeData,
      };
      const res = await axios.request(option);
     
      console.log(res);
      setResult(res.data.data.translatedText);
    } catch (error) {
      console.log(error);
    }
  }
 

  return (
    <>
     <h3 style={{textAlign:"center"}}>Text Translator</h3>
      <div className="main">
        
        <div className="inputfields">
        <select
        name="source"
        onChange={(e) => {
          setSource(e.target.value);
        }}
        value={source}
      >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="ml">Malayalam</option>
            <option value="ta">Tamil</option>

            <option value="mr">marathi</option>
            <option value="gu">Gujarati</option>
            <option value="ja">Japanese</option>
            <option value="ur">Urdu</option>
            <option value="la">Latin</option>
            
          </select>
          <select
            name="target"
            id="target"
            onChange={(e) => {
              setTarget(e.target.value);
            }}
            value={target}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="ml">Malayalam</option>
            <option value="ta">Tamil</option>

            <option value="mr">marathi</option>
            <option value="gu">Gujarati</option>
            <option value="ja">Japanese</option>
            <option value="ur">Urdu</option>
            <option value="la">Latin</option>
          </select>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Enter the text You wanted to convert"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button onClick={getTranslatedData} style={{backgroundColor:"gray"}}>Translate</button>
        </div>
        <br />
        <p style={{ textAlign: "center",color:"red" }}>{result}</p>
      </div>
    </>
  )
}

export default App
