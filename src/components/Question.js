import "./Question.css"
import { useState } from "react/cjs/react.development"

// create array []
// array.indexOf(correctAnswer) = Math.floor(Math.random()*4-1)
// array.map

export default function Question(props) {

    // let buttonsArray = [
                // <button 
                //         className={props.isClicked ? "option-button-clicked" : "option-button"} 
                //         onClick={() => props.setCorrectAnswerCount(prevCorrectAnswer => prevCorrectAnswer + 1), props.selectAnswer, console.log(props.correctAnswerCount)}>
                //         {props.correctAnswer}
                // </button>,
                // <button 
                //         className={props.isClicked ? "option-button-clicked" : "option-button"} 
                //         onClick={props.selectAnswer}>
                //         {props.incorrectAnswers[0]}
                // </button>,
                // <button 
                //         className={props.isClicked ? "option-button-clicked" : "option-button"} 
                //         onClick={props.selectAnswer}>
                //         {props.incorrectAnswers[1]}
                // </button>,
                // <button 
                //         className={props.isClicked ? "option-button-clicked" : "option-button"} 
                //         oonClick={props.selectAnswer}>
                //         {props.incorrectAnswers[2]}
                // </button>
    // ]

    // function shuffleArray(array) {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    // }

    // buttonsArray = shuffleArray(buttonsArray)

    return (
        <div className="question-container">
            <h2 className="question-text">{props.questionText}</h2>
            <div className="options">
                <button 
                        className={props.isClicked ? "option-button-clicked" : "option-button"} 
                        onClick={() => props.setCorrectAnswerCount(prevCount => prevCount + 1)}>
                        {props.correctAnswer}
                </button>,
                <button 
                        className={props.isClicked ? "option-button-clicked" : "option-button"} 
                        onClick={props.selectAnswer}>
                        {props.incorrectAnswers[0]}
                </button>,
                <button 
                        className={props.isClicked ? "option-button-clicked" : "option-button"} 
                        onClick={props.selectAnswer}>
                        {props.incorrectAnswers[1]}
                </button>,
                <button 
                        className={props.isClicked ? "option-button-clicked" : "option-button"} 
                        onClick={props.selectAnswer}>
                        {props.incorrectAnswers[2]}
                </button>
            </div>
        </div>
    )
}