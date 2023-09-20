import './Card.css'

export default function Card (props) {
    return (
        <>
            <div className="card">
                <img src={props.imgSrc} alt={props.imgAlt} className="cardImg" />
                <p className="cardHeader">{props.title}</p>
                <p className="cardContent">{props.content}</p>
            </div>
        </>
    );
}