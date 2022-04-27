import React, {useState} from "react";
import '../assets/css/style_result.css';
import resultPic from "../assets/img/sample_result.jpg";
import quotes from "../assets/json/result.json"

function Result(props) {
    const results = props.results;

    // // console.log(typeof quotes)
    
    // const {introvert, extravert} = quotes;
    // console.log(typeof introvert, introvert)
    // console.log(typeof extravert, extravert )

    return ( 
    <div className="container-section">
        <div className="picture-section">
            <img src={resultPic} className="resultPic" alt="what?" />
        </div>
        <div className="result-section">
            <div className="center title">Result</div>
            <div className="center"></div>
        </div>
    </div>
    );
}

export default Result;