// import * as quizService from "../../../services/QuizServices/QuizServices"
import './Search.css'

const Search = (props) => {
    const search = async (searchTerm,) => {
        // const result = await quizService.Search(searchTerm);
        props.history.push('/search/')
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const name = Object.fromEntries(new FormData(e.target));
        await search(name.name)
    }
    return (
        <h1 className="h1">UNDER CONSTRUCTION</h1>
    )
}

export default Search