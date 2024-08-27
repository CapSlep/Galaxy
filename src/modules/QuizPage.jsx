import { DataContext, useData } from "../DataContext";
import { useState } from "react";

export default function QuizPage() {
    const [quizIndex, setQuizIndex] = useState(0);
    const data = useData();

    function quizAnswerHandle() {
        if (quizIndex >= data.quizPage.quiz.length - 1) {
            console.log("All answers");
        } else {
            const nextQuizIndex = quizIndex + 1;
            setQuizIndex(nextQuizIndex);
        }
    }

    return (
        <section className="quiz__page container  flex-column">
            <div className="quiz__logo-wrapper">
                <img src="./img/samsung_logo.png" alt="Samsung Galaxy" />
            </div>
            <h2 className="quiz__title">{data.quizPage.title}</h2>
            <p className="quiz__selling">
                {data.quizPage.textSelling}{" "}
                <span className="price-new">{data.priceNew}</span>
            </p>
            <div className="quiz__img-wrapper">
                <img src="./img/rings.webp" alt="RINGS" />
            </div>
            <div className="quiz__texts flex-column">
                {data.quizPage.texts.map((text, index) => {
                    return (
                        <p key={index} className="quiz__text">
                            {text}
                        </p>
                    );
                })}
            </div>
            <div className="quiz__game flex-column">
                <div className="game__title-holder">
                    Question {quizIndex + 1} of {data.quizPage.quiz.length}:{" "}
                    {data.quizPage.quiz[quizIndex].question}
                </div>
                <div className="game__answers flex-column">
                    {data.quizPage.quiz[quizIndex].answers.map(
                        (answer, index) => {
                            return (
                                <button
                                    key={index}
                                    className="game__answer"
                                    onClick={quizAnswerHandle}
                                >
                                    {answer}
                                </button>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
