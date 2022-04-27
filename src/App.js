import React, { useRef, useState } from "react";
// import Questions from "./components/Question";
import bg from "./assets/img/pexels-antoni-shkraba-4612235.jpg";
import "./assets/css/Question.css";
import "./assets/css/style.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Question from "./components/Question";
import Result from "./components/Result";
import Landing from "./components/Landing";
import lain0 from "./assets/img/035.jpg";
import lain1 from "./assets/img/049.jpg";
import lain2 from "./assets/img/050.jpg";
import lain3 from "./assets/img/063.jpg";
import lain4 from "./assets/img/095.jpg";

const lains = [lain0, lain1, lain2, lain3, lain4];

function App() {
    const ref = useRef();
    const [results, set_results] = useState([{ lion: 0 }, { cow: 0 }]);
    const [questions] = useState([
        {
            question: "your question here your question here your question here your question here ?",
            one: ["lion wins lion wins lion wins lion wins", "lion"],
            two: ["cow wins cow wins cow wins cow wins cow wins", "cow"],
        },
        {
            question: "your question here  your question here your question here ?",
            one: ["lion wins", "lion"],
            two: ["cow wins", "cow"],
        },
        {
            question: "your question here your question here your question here your question here ?",
            one: ["lion wins", "lion"],
            two: ["cow wins", "cow"],
        },
        {
            question: "your question here your question here your question here ?",
            one: ["lion wins", "lion"],
            two: ["cow wins", "cow"],
        },
        {
            question: "your question here your question here your question here your question here ?",
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
    const parallax_style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <React.Fragment>
            <Parallax ref={ref} pages={questions.length + 2}>
                <ParallaxLayer
                    offset={0}
                    speed={0.01}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                    }}
                    factor={6}
                ></ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    onClick={() => ref.current.scrollTo(1)}
                >
                    <Landing />
                </ParallaxLayer>
                {questions.map((e, idx) => {
                    console.log(idx);
                    return (
                        <ParallaxLayer
                            onClick={() => ref.current.scrollTo(idx + 2)}
                            speed={1}
                            offset={idx + 1}
                            style={parallax_style}
                        >
                            <Question
                                question={e.question}
                                op1={e.one}
                                op2={e.two}
                                imsrc={lains[idx]}
                                on_answer={answered}
                            />
                        </ParallaxLayer>
                    );
                })}
                <ParallaxLayer
                    speed={1}
                    // style={parallax_style}
                    offset={questions.length + 1}
                >
                    <Result results={results} />
                </ParallaxLayer>
            </Parallax>
        </React.Fragment>
    );
}

export default App;
