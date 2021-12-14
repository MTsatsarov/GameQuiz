import { createContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
export const CreateContext = createContext();

export const CreateProvider = (props) => {
    const [quizName, setQuizName] = useState({ name: '', isValid: false });
    const [questions, setQuestions] = useState([]);
    const createQuestion = (question) => {
        var newQuestion = { type: question, questionName: '', answers: [], isValidQuestionName: false, haveAnswers: false, correct: '' }
        setQuestions(questions.concat([newQuestion]));

    };

    const addAnswer = (answer, questionIndex) => {
        var newAnswer = { answer, name: '', isValidAnswerName: false, isCorrect: false }
        var question = questions[questionIndex];
        question.answers.push(newAnswer)
        question.haveAnswers = true;
        setQuestions(questions)
    }

    const changeAnswerNameHandler = (newName, questionIndex, answerIndex) => {
        var answer = (questions[questionIndex]).answers[answerIndex];
        if (newName.length < 10 || newName.length > 150) {
            answer.isValidAnswerName = false;
        } else {
            answer.isValidAnswerName = true;
        } if (answer.isCorrect) {
            questions[questionIndex].correct = newName;
        }
        answer.name = newName;
        setQuestions(questions)
    }
    const changeCorrectAnswer = (questionIndex, answerindex) => {
        questions[questionIndex].correct = questions[questionIndex].answers[answerindex].name;
        questions[questionIndex].answers[answerindex].isCorrect = true;
        setQuestions(questions)
    }

    const changeQuizName = (e) => {
        var currentName = e.target.value;
        if (currentName.length < 5 || currentName.length > 50) {
            setQuizName({ name: currentName, questions: questions, isValid: false })
        } else {
            setQuizName({ name: currentName, questions: questions, isValid: true })
        }
    }
    const handleQuestionChange = (index, name, haveAnswers) => {
        var question = questions[index];
        if (name.length >= 10 && name.length <= 150) {
            question.isValidQuestionName = true;
            if (haveAnswers) {
                question.haveAnswers = true;
            }
        }
        question.questionName = name;
        setQuestions(questions)
    }
    const createQuiz = () => {
        if (!quizName.isValid) {
            alert('Quiz name must be between 5 and 50 characters long!');
            return;
        } else if (!questions.some(x => x.isValidQuestionName)) {
            alert('Question name must be between 10 and 150 characters long!');
            return;

        } else if (!questions.some(x => x.haveAnswers)) {
            alert('All questions must have answers!');
            return;

        } else if (!questions.some(x => x.answers.some(y => y.isValidAnswerName))) {
            alert('Answer name must be between 10 and 150 characters long!');
            return;

        }
        else if (questions.some(x => x.correct == '')) {
            alert('All questions must have correct answer!');
            return;

        }
        var obj = {
            name: quizName.name,
            questions: [],
            creator: localStorage.getItem('id')
        }

        questions.map(x => obj.questions.push({
            title: x.questionName,
            answerArray: x.answers.map(a => a.name),
            correct: x.correct,
        }))
        return obj;

    }
    return (
        <CreateContext.Provider value={{ changeQuizName, quizName, createQuestion, handleQuestionChange, addAnswer, changeAnswerNameHandler, changeCorrectAnswer, createQuiz }}>
            {props.children}
        </CreateContext.Provider>
    )
}