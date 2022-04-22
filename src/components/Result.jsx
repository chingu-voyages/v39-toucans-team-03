import React from "react";

function Result(props) {
    return ( <div>
        {props.results.map((e, idx) => (
                <div key={idx}>
                    {Object.keys(e)}:{Object.values(e)}
                </div>
            ))}
    </div> );
}

export default Result;