import React, {useEffect, useState} from "react";
import '../assets/css/style_result.css';
import resultPic from "../assets/img/sample_result.jpg";
import resultQuote from "../assets/json/quotes.json"
import introvertChecklist from "../assets/json/introvert.json"
import extrovertChecklist from "../assets/json/extrovert.json"
// import {kakaotalk, messenger, wechat} from "../assets/img/icons";
import kakaotalk from "../assets/img/icons/kakaotalk.png";
import messenger from "../assets/img/icons/messenger.png";
import wechat from "../assets/img/icons/wechat.png";

function Result(props) {

    const results = props.results; // const [results] = useState(props.results);
    let isFinished =  props.isFinished;
    const [quotes] = useState(()=>resultQuote.quotes);
    const [oneQuote, setOneQuote] = useState({quote:'Answer all the question first :)', author:''});
    const [checkList, setCheckList] = useState('Waiting you to finish all the questions!')
    
    // console.log("before", checkList.map(list=>list+1))
    useEffect(()=>{
        if(isFinished === true){
            setOneQuote(prev => {
                    if(results.introvert > results.extrovert){
                        prev = quotes.introvert[Math.floor(Math.random() * 30)];
                        setCheckList(() => introvertChecklist.checklist)
                    } 
                    else if(results.introvert === results.extrovert) {
                        prev = quotes.ambivert[Math.floor(Math.random() * 30)];
                        setCheckList(() => extrovertChecklist.checklist)
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
                    {checkList.map((list,idx) =><li key={idx+1}><input type="checkbox" className="checkbox"/>{list}</li>)}
                </ul>}
            </div>
            <div className="center">
                <button onClick={props.clearState}>Retry</button>
            </div>
            <div className="share-section">
                <div className="center title ">Share with your friends</div>
                <div className="center">
                    <a href="\"><img src={messenger} alt="" /></a>
                    <a href="\"><img src={kakaotalk} alt="" /></a>
                    <a href="\"><img src={wechat} alt="" /></a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Result;