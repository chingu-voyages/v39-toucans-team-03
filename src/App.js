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
            question: "On a honey-like weekend?",
            one: ["After all, I should take a rest while watching TV at home on weekends.", "introvert"],
            two: ["The house is so boring! I will go anywhere!", "extrovert"],
        },
        {
            question: "What is my first reaction when I am angry?",
            one: ["I’m filled with anger and I'm crying.", "introvert"],
            two: ["Speak rationally about the reason for my anger.", "extrovert"],
        },
        {
            question: "Which one is closer to me? I think I know where my things are, but when I look for them,",
            one: ["I am well organized and find where my things are.", "introvert"],
            two: ["I can't find them...", "extrovert"],
        },
        {
            question: "Your friend asks you to drag you in front of her/his friend of opposite sex and have a conversation.",
            one: ["I’m shy, so I just smile quietly and be awkward.", "introvert"],
            two: ["Laugh and have fun talking together.", "extrovert"],
        }
    ]);
    
    let isFinished = results.count === Object.keys(questions).length ? true : false;

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
