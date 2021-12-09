import { useState } from "react/cjs/react.development";


export const EditAnswer = ({ answer, correct }) => {
    const [name,setName] = useState(answer.title)
const nameChangeHandler=(e) => {
    var value = e.target.value;
    setName(value)
}
    return (
        <div className='answer'>
            <input type='text'  name='answerName' id={answer.id} defaultValue={name} onChange={nameChangeHandler}/>
            <input type='checkbox'defaultValue={name} name='isCorrect' defaultChecked={correct}/>
        </div>
    )
}