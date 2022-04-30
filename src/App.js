import React, { useRef, useState } from "react";
// import Questions from "./components/Question";
import bg from "./assets/img/pexels-antoni-shkraba-4612235.jpg";
import "./assets/css/Question.css";
import "./assets/css/style.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Question from "./components/Question";
import Result from "./components/Result";
import Landing from "./components/Landing";
import Progress from "./components/Progress";
import lain0 from "./assets/img/035.jpg";
import lain1 from "./assets/img/049.jpg";
import lain2 from "./assets/img/050.jpg";
import lain3 from "./assets/img/063.jpg";
import lain4 from "./assets/img/095.jpg";

const lains = [lain0, lain1, lain2, lain3, lain4];

function App() {
    const ref = useRef();
    
    const [results, set_results] = useState( {introvert: 0 ,  extrovert: 0, count : 0} );
    const [questions] = useState([
        {
            question: "your question here your question here your question here your question here ?",
            one: ["lion wins lion wins lion wins lion wins", "introvert"],
            two: ["cow wins cow wins cow wins cow wins cow wins", "extrovert"],
        },
        {
            question: "your question here  your question here your question here ?",
            one: ["lion wins", "introvert"],
            two: ["cow wins", "extrovert"],
        },
        {
            question: "your question here your question here your question here your question here ?",
            one: ["lion wins", "introvert"],
            two: ["cow wins", "extrovert"],
        },
        {
            question: "your question here your question here your question here ?",
            one: ["lion wins", "introvert"],
            two: ["cow wins", "extrovert"],
        },
        {
            question: "your question here your question here your question here your question here ?",
            one: ["lion wins", "introvert"],
            two: ["cow wins", "extrovert"],
        },
    ]);
    let isFinished = results.count === 5 ? true : false;

    const answered = (e) => {
        let results_copy = results;
        results_copy[e] += 1;
        results_copy.count += 1;
        set_results({...results_copy});
    };
    const parallax_style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    function updateProgressBar(idx){
        document.querySelector(".progress-bar").style.width=`${(idx/questions.length)*100}%`;
    }
    return (
        <React.Fragment>
            <Progress />
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
                            onClick={() => {
                                ref.current.scrollTo(idx + 2);
                                updateProgressBar(idx+1);
                            }}
                            key={idx}
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
                    <Result isFinished={isFinished} results={results} />
                </ParallaxLayer>
            </Parallax>
        </React.Fragment>
    );
}

export default App;
