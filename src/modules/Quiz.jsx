import { useState } from "react";

export default function Quiz({ quizData, quizFinishEvent }) {
    const [quizIndex, setQuizIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    function quizAnswerHandle() {
        if (quizIndex >= quizData.length - 1) {
            console.log("All answers");
            if (quizFinishEvent) {
                quizFinishEvent();
            }
        } else {
            setIsFading(true);
            setTimeout(() => {
                const nextQuizIndex = quizIndex + 1;
                setQuizIndex(nextQuizIndex);
                setIsFading(false);
            }, 500);
        }
    }

    return (
        <div
            className={`quiz__game flex-column ${
                isFading ? "fade-out" : "fade-in"
            }`}
        >
            <div className="game__title-holder">
                Question {quizIndex + 1} of {quizData.length}:{" "}
                {quizData[quizIndex].question}
            </div>
            <div className="game__answers">
                {quizData[quizIndex].answers.map((answer, index) => {
                    return (
                        <button
                            key={index}
                            className="game__answer"
                            onClick={quizAnswerHandle}
                        >
                            {answer}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
