import './Text.css';

function Text(props) {
    return(
        <h3 className="name-list">{props.text}</h3>
    )
}

export default Text;