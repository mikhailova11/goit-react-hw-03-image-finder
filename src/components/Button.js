import '../styles.css';


const Button = ({text, onClick}) => {
    return (
        <button type="button" className="Button" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button