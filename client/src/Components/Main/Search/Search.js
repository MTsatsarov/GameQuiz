import * as quizService from "../../../services/QuizServices/QuizServices"


const Search = (props) => {
    const search = async (searchTerm,) => {
        const result = await quizService.Search(searchTerm);
        props.history.push('/search/')
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const name = Object.fromEntries(new FormData(e.target));
        await search(name.name)
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='name'>Please enter the name of the quiz </label>
            <input type='text' name='name' />
            <button>Search</button>
        </form>
    )
}

export default Search