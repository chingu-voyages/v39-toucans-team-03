import React, {useEffect, useState} from "react";
import '../assets/css/style_result.css';
import resultPic from "../assets/img/sample_result.jpg";
import resultQuote from "../assets/json/quotes.json"
import introvertChecklist from "../assets/json/introvert.json"
import extrovertChecklist from "../assets/json/extrovert.json"

function Result(props) {

    const results = props.results; // const [results] = useState(props.results);
    let isFinished =  props.isFinished;
    const [quotes] = useState(()=>resultQuote.quotes);
    const [oneQuote, setOneQuote] = useState({quote:'Answer all the question first :)', author:''});
    const [checkList, setCheckList] = useState('Waiting you to finish all the questions!')
    
    console.log(results)
    // console.log("before", checkList.map(list=>list+1))
    useEffect(()=>{
        if(isFinished === true){
            setOneQuote(prev => {
                    if(results.introvert > results.extrovert){
                        prev = quotes.introvert[Math.floor(Math.random() * 30)];
                        setCheckList(checklist => introvertChecklist.checklist)
                    } 
                    else if(results.introvert === results.extrovert) {
                        prev = quotes.ambivert[Math.floor(Math.random() * 30)];
                        setCheckList(checklist => extrovertChecklist.checklist)
                    }
                    else{
                        prev = quotes.extrovert[Math.floor(Math.random() * 15)];
                    }
                    
                    return prev;
            })
        }
    },[isFinished, quotes, results])

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
            <div className="center title check-section">Check List</div>
            <div className="center">
                {typeof checkList === 'string' ?
                checkList :
                <ul>
                    {checkList.map((list,idx) =><li key={idx+1}>{list}</li>)}
                </ul>}
            </div>
        </div>
    </div>
    );
}

export default Result;