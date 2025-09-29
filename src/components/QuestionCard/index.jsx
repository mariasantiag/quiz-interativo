import questions  from "../../data/question";
import './QuestionCard.module.css'

export default function Questions() {
    const questionsList = questions.map(question => (
      <div key={question.id}>
        <h3>{question.question}</h3>
        {/* Aqui mapeamos as opções e criamos um botão para cada */}
        {question.options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
    ));
    return (
      <div className='questions-container'>
        {questionsList}
      </div>
    );
  }