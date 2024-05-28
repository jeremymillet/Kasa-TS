import './Card.scss'
import { Link } from 'react-router-dom';

type CardPropsType={
    cover: string;
    id: string;
    description: string;
    title: string;
    index: number;
}

const Card: React.FC<CardPropsType> = ({ cover, title, description, id }) => {
    return (
        <Link to={`market/${id}`} className='card'>
            <div className='card-overlay'></div>
            <img className='card-img'src={cover} alt={description} />
            <p className='card-text'>{title}</p>
       </Link> 
    )
}

export default Card