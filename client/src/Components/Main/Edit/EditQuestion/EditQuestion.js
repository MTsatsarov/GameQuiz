function  EditQuestion(props) {
    console.log(props);
    return (
       <>
       <input value = {props.info[0].questionName}/>
       <input value = {props.info[0].firstAnswer}/>
       <input value = {props.info[0].secondAnswer}/>
       <input value = {props.info[0].thirdAnswer}/>
       <input value = {props.info[0].fourthAnswer}/>
       <input value = {props.info[0].correctIndex}/>
       </>
    )
}

export default EditQuestion