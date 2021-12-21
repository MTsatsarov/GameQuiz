import { useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
const FetchedError = (props) => {
console.log(props.error.status);
var history = useHistory();
useEffect(()=> {
    props.error.status === 401  && history.push('/login')
})
    return (
        <>
        <h2>Error has occured</h2>
        {props.error.status === 404 ? `The resourse you are looking for was not found`: ''}
        </>
    )
}

export default FetchedError