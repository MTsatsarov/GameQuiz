import './EditQuestion.css'
function  EditQuestion(props) {
return (
       <div className='questionsForm'>
           <label htmlFor='name'>Question Name</label>
       <input type='text' name='name' value = {props.info[0].questionName}/>

       <label htmlFor='First Answer'>First Answer</label>
       <input type='text' name='First Answer' value = {props.info[0].firstAnswer}/>

       <label htmlFor='Second Answer'>Second Answer</label>
       <input type='text'  name='Second Answer' value = {props.info[0].secondAnswer}/>

       <label htmlFor='Third Answer'>Third Answer</label>
       <input type='text' name='Third Answer'  value = {props.info[0].thirdAnswer}/>

       <label htmlFor='Fourth Answer'>Fourth Answer</label>
       <input type='text'  name='Fourth Answer' value = {props.info[0].fourthAnswer}/>

       <label htmlFor='Correct Index'>Correct Answer Index</label>
       <input type='number'  name='Correct Index' value = {props.info[0].correctIndex}/>
       </div>
    )
}

export default EditQuestion