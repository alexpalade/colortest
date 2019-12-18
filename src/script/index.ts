import "../scss/styles.scss";
import { getQuestions } from "./model";
require("../assets/favicon.ico");

window.addEventListener("load", function() {
    const questions = getQuestions(10);
    for (let i = 0; i < questions.length; ++i) {
        console.log(questions[i]);
    }
});
