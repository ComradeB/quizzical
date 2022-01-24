import React, { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid"
import blobTopRight from "./images/blob-top-right.png";
import blobBottomLeft from "./images/blob-bottom-left.png";
import StartModal from "./components/StartModal";
import Question from "./components/Question";

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [confirmAnswers, setConfirmAnswers] = useState(false);
  const [questions, setQuestions] = useState([]);

  console.log(questions);
  console.log(correctAnswerCount)

  function toggleIsClicked() {
    setIsClicked(!isClicked);
  }

  function playAgain() {
    setConfirmAnswers(false);
    setCorrectAnswerCount(0)
    setStartQuiz(false);
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, [startQuiz]);

  const questionElements = questions.map((element) => {
    return (
      <Question
        key={nanoid()}
        questionText={element.question}
        correctAnswer={element.correct_answer}
        incorrectAnswers={element.incorrect_answers}
        selectAnswer={toggleIsClicked}
        isClicked={isClicked}
        setCorrectAnswerCount={setCorrectAnswerCount}
      />
    );
  });

  return (
    <main>
      <img
        src={blobTopRight}
        className={startQuiz ? "main--blob-top-right" : "modal--blob-top-right"}
      />
      {startQuiz ? (
        <div className="content-container">
          {questionElements}
          {confirmAnswers ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>{`You scored ${correctAnswerCount}/5 correct answers`}</p>
              <button onClick={playAgain}>Play again</button>
            </div>
          ) : (
            <button
              style={{ marginInline: "auto" }}
              onClick={() => setConfirmAnswers(true)}
            >
              Check answers
            </button>
          )}
        </div>
      ) : (
        <StartModal clickToBegin={() => setStartQuiz(true)} />
      )}
      <img
        src={blobBottomLeft}
        className={
          startQuiz ? "main--blob-bottom-left" : "modal--blob-bottom-left"
        }
      />
    </main>
  );
}
