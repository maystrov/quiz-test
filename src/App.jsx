import { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: ["приложение", "часть приложения или страницы", "то, что я не знаю что такое"],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но c возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result" />
      <h2>Вы отгадали {correct} ответа из 10</h2>
      <button onClick={() => window.location.reload()}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, onVariantClick }) {
  const question = questions[step];
  const { title, variants } = question;
  const progress = Math.floor((step / questions.length) * 100);
  return (
    <>
      <h1 style={{ marginBottom: 30, textAlign: "center" }}>Quizz game</h1>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => (
          <li onClick={() => onVariantClick(index)} key={variant}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const onVariantClick = (index) => {
    setStep(step + 1);
    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game onVariantClick={onVariantClick} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
