import { createContext, useState } from "react";
export const PlayContext = createContext();

export const PlayContextProvider = (props) => {
    const [checkedAnswer, setCheckedAnswer] = useState({});
    const checkAnswer = (e, question) => {
        checkedAnswer[question] = e.target.value
        setCheckedAnswer(checkedAnswer)
    }
        return (
            <PlayContext.Provider value={{ checkAnswer, checkedAnswer ,setCheckedAnswer}}>
                {props.children}
            </PlayContext.Provider>
        )
    }

