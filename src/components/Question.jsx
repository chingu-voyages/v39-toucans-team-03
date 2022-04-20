import React, { useState } from "react";

function Questions(props) {
    const [results, set_results] = useState([{ lion: 0 }, { cow: 0 }]);
    const [questions, set_questions] = useState([
        {
            question: "your question here",
            one: ["lion wins", "lion"],
            two: ["cow wins", "cow"],
        },
        {
            question: "your question here",
            one: ["lion wins", "lion"],
            two: ["cow wins", "cow"],
        },
    ]);

    const answered = (e) => {
        console.log(e);
        console.log(Object.keys(results[0]));
        let results_copy = results.map((r) => {
            if (Object.keys(r)[0] === e) r[e] = r[e] + 1;
            return r;
        });
        console.log(results_copy);
        set_results([...results_copy]);
    };

    return (
        <React.Fragment>
            {questions.map((e, idx) => (
                <div key={idx}>
                    <h2>{e.question}</h2>
                    <button onClick={() => answered(e.one[1])}>
                        {e.one[0]}
                    </button>
                    <button onClick={() => answered(e.two[1])}>
                        {e.two[0]}
                    </button>
                </div>
            ))}
            {results.map((e, idx) => (
                <div key={idx}>
                    {Object.keys(e)}:{Object.values(e)}
                </div>
            ))}
        </React.Fragment>
    );
}

export default Questions;
