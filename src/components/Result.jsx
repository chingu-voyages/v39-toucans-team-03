import React, {useState} from "react";
import '../assets/css/style_result.css';
import resultPic from "../assets/img/sample_result.jpg";
import quotes from "../assets/json/result.json"

function Result(props) {
    
    const [results, setResult] = useState(props.results)
    const [data, setData] = useState(quotes);
    const [quote, setQuote] = useState('');
    console.log(data.quotes.introvert)
    let lion = results[0].lion
    let cow = results[1].cow

    if(cow === lion){
        
    }

    if(cow > lion){

    }

    if(lion < cow){

    }
    


    return ( 
    <div className="container-section">
        <div className="picture-section">
            <img src={resultPic} className="resultPic" alt="what?" />
        </div>
        <div className="result-section">
            <div className="center title">Result</div>
            <div className="center">
                {quote}
            </div>
            {/* check list */}
            <div className="center title">Check List</div>
            <div>

            </div>
        </div>
    </div>
    );
}

export default Result;