import Facebook from "./modules/Facebook";
import Header from "./modules/Header";
import StarterPage from "./modules/StarterPage";
import Footer from "./modules/Footer";
import Notifications from "./modules/Notifications";
import GeneralPage from "./modules/GeneralPage";

import { useData } from "./DataContext"; // Import the custom hook
import { useState } from "react";

export default function App() {
    const [showQuiz, setShowQuiz] = useState(false);
    const data = useData();

    function getUrl() {
        // Retrieve the macro from the button's data-attribute
        // const offerButton = document.querySelector(".checkout__button");
        // const redirectLink = offerButton.getAttribute("data-offer");

        let redirectLink = document.querySelector("#redirectLink").href;

        if (!redirectLink) {
            console.error("Offer link not found");
            return;
        }

        // Set parameters for redirection
        let adRedirectName = data.productName;
        let img_url = "./img/product/product.webp";

        // Send the fbq event
        fbq("track", "InitiateCheckout");

        // Check if the link already has parameters
        var separator = redirectLink.includes("?") ? "&" : "?";

        // Redirect with new parameters
        window.location.href =
            redirectLink +
            separator +
            "adRedirectName=" +
            encodeURIComponent(adRedirectName) +
            "&adRedirectImg=" +
            encodeURIComponent(img_url);
    }

    function buyHandler(event) {
        event.preventDefault();
        // Вызываем функцию getUrl для изменения URL и перенаправления
        getUrl();
    }

    function quizAnswerHandle() {
        setShowQuiz(false);
    }

    return (
        <>
            <Facebook></Facebook>
            <Notifications></Notifications>
            <Header></Header>
            <StarterPage
                showPage={showQuiz}
                quizFinishEvent={quizAnswerHandle}
            ></StarterPage>
            <GeneralPage showPage={!showQuiz}></GeneralPage>
            <Footer></Footer>
        </>
    );
}
