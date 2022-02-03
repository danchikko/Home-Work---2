import FormatDate from "./FormatDate";
import Photo from "./Photo";
import Text from "./Text";
import './Comment.css';
import Price from "./Price";

function Comment(props) {
    return(
        <div className="container">
            <Photo author={props.author}/>
            <Text text={props.text} />
            <Price price={props.price} />
                {FormatDate(props.date)}
        </div>
    )
}

export default Comment;