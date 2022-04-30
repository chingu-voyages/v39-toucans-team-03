import React, {useEffect, useState} from "react";
import '../assets/css/style_result.css';
import resultPic from "../assets/img/sample_result.jpg";
import resultQuote from "../assets/json/quotes.json"

function Result(props) {

    const results = props.results; // const [results] = useState(props.results);
    let isFinished =  props.isFinished;
    const [quotes, setQuotes] = useState(()=>resultQuote.quotes);
    const [oneQuote, setOneQuote] = useState({quote:'loading...', author:''});
    
    useEffect(()=>{
        if(isFinished === true){
            setOneQuote(prev => {
                    if(results.introvert > results.extrovert){
                        prev = quotes.introvert[Math.floor(Math.random() * 30)];
                    } 
                    else if(results.introvert === results.extrovert) {
                        prev = quotes.ambivert[Math.floor(Math.random() * 30)];
                    }
                    else{
                        prev = quotes.extrovert[Math.floor(Math.random() * 15)];
                    }
                    return prev;
            })
        }
    },[isFinished])

    return ( 
    <div className="container-section">
        <div className="picture-section">
            <img src={resultPic} className="resultPic" alt="what?" />
        </div>
        <div className="result-section">
            <div className="center title">Result</div>
            <div className="center">
                <div>{oneQuote.quote}</div>
                <div>{oneQuote.author}</div>
            </div>
            {/* check list */}
            <div className="center title">Check List</div>
            <div>
                {/* checklists */}
            </div>
        </div>
    </div>
    );
}

export default Result;