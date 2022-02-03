import './Photo.css';

function Photo (props) {
    console.log(props)
    return (
        <div>
            <img src={props.author.photoUrl}
            alt={props.author.name}
            />
            <div className="name-car">                    
            {props.author.name}
            </div>
        </div>
    )
}

export default Photo;