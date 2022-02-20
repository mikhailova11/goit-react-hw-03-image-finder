import Button from './Button'
import '../styles.css';

const Searchbar = ({onSubmit, text}) => {
    return (
    <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
            <Button text={text} />
            <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            />
        </form>
    </header>
    )
}

export default Searchbar