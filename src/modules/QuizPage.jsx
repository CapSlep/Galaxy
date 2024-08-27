import { DataContext, useData } from "../DataContext";
import { useState } from "react";

export default function QuizPage() {
    const [quizIndex, setQuizIndex] = useState(0);
    const data = useData();
    return (
        <section className="quiz__page">
            <div className="quiz__logo-wrapper">
                <img src="./img/samsung_logo.png" alt="Samsung Galaxy" />
            </div>
            <h2 className="quiz__title">{data.quizPage.title}</h2>
            <p className="quiz__selling">
                {data.quizPage.textSelling}
                {data.quizPage.priceNew}
            </p>
            <div className="quiz__img-wrapper">
                <img src="./img/rings.webp" alt="RINGS" />
            </div>
            <div className="quiz__texts">
                {data.quizPage.texts.map((text, index) => {
                    return (
                        <p key={index} className="quiz__text">
                            {text}
                        </p>
                    );
                })}
            </div>
            <div className="quiz__game">{}</div>
        </section>
    );
}
