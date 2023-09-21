import './Card.css';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.imgSrc} alt={props.imgAlt} className="cardImg" />
                <p className="cardTitle">{props.title}</p>
                <p className="cardContent">{props.content}</p>
            </div>
        </>
    );
}

export default Card;