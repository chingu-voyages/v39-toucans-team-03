import React from "react";
import '../assets/css/style_result.css';
import resultPic from "../assets/img/sample_result.jpg";

function Result(props) {
    return ( 
    <div>
        <div className="grid-parent">
            <span className="title center">Result</span>
            <img src={resultPic} className="picture result_picture_elements" alt="" />
            <div className="diagram">
                circle
            </div>
        </div>
        <div className ="grid-parent checkList">
            <span className="title center">Check List</span>
            <div class="items">
                <div><label><input type="checkbox"/><span>Results sentences are in here esults sentences are in hereesults sentences are in hereesults sentences are in hereesults sentences are in hereesults sentences are in hereesults sentences are in hereesults sentences are in here</span></label></div>
                <div><label><input type="checkbox"/><span>Results sentences are in here</span></label></div>
                <div><label><input type="checkbox"/><span>Results sentences are in here</span></label></div>
                <div><label><input type="checkbox"/><span>Results sentences are in here</span></label></div>
                <div><label><input type="checkbox"/><span>Results sentences are in here</span></label></div>
            </div>
        </div>
        <div className="grid-parent">
            <span className="title center">Share</span>
            <div className="items">
                <span>weChat</span>
                <span>Messenger</span>
                <span>KaKao talk</span>
            </div>
        </div>
    </div>
    );
}

export default Result;


// results: Array(2)
// 0: {lion: 0}
// 1: {cow: 0}

 
// const results = props.results;

// const final_result = () =>{
//     results.map((res)=>{
//         if(res.lion > res.cow){
//             return res
//         }
//     })
// }

// <div>
//     {props.results.map((e, idx) => (
//             <div key={idx}>
//                 {Object.keys(e)}:{Object.values(e)}
//             </div>
//         ))}
// </div> 