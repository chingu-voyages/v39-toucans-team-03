import React from "react";
import '../custom/result_style/css_Result.css';
import resultPic from "../rf.jpg";

// results: Array(2)
// 0: {lion: 0}
// 1: {cow: 0}

function Result(props) {
    
    // const results = props.results;

    // const final_result = () =>{
    //     results.map((res)=>{
    //         if(res.lion > res.cow){
    //             return res
    //         }
    //     })
    // }

    return ( 
    <div className="center">
        <div className="center">
            <span className="center typing-demo" >Result</span>
        </div>
        <div className="result_picture">
            <img src={resultPic} className="result_picture_elements" alt="" />
            <div>
                diagram
            </div>
        </div>
        <div className ="checkList">
            <span className="center">Check List</span>
            <ul class="myclass">
                <li><label><input type="checkbox"/><span>some text</span></label></li>
                <li><label><input type="checkbox"/><span>some text</span></label></li>
                <li><label><input type="checkbox"/><span>some text</span></label></li>
            </ul>
           
        </div>
        <div>
            <span className="center">share</span>
            <div>
                <span>weChat</span>
                <span>Messenger</span>
                <span>KaKao talk</span>
            </div>
        </div>
    </div>
    
    
    
    // <div>
    //     {props.results.map((e, idx) => (
    //             <div key={idx}>
    //                 {Object.keys(e)}:{Object.values(e)}
    //             </div>
    //         ))}
    // </div> 
    
    
    );
}

export default Result;