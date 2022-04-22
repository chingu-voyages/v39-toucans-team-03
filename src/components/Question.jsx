import React from "react";

function Question(props) {
    return (
        <div className="container">
            <div className="Question">
                <h3>{props.question}</h3>
            </div>
            <div className="Answer1">
                <button onClick={() => props.on_answer(props.op1[1])}>
                    {props.op1[0]}
                </button>
            </div>
            <div className="Answer2">
                <button onClick={() => props.on_answer(props.op2[1])}>
                    {props.op2[0]}
                </button>
            </div>
            <div className="Image">
                <img
                    src={props.imsrc}
                    style={{ width: "100%", height: "auto" }}
                    alt="flowers"
                ></img>
            </div>
        </div>
    );
}

export default Question;
