import "./QuestionSwitchBox.css"
const QuestionSwitchBox = (props) => {
    return (
        <div data-name={props.questionsName} data-question={props.boxNum} className={props.currentQuestion === props.boxNum ? 'active-square outer-square' : 'outer-square'} onClick={props.clickHandler}>
            <div data-question={props.boxNum} className="inner-square">
            </div>
        </div>
    )
}

export default QuestionSwitchBox