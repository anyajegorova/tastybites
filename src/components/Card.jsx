import { useState } from 'react';

import './Card.css';
import Rating from '@mui/material/Rating';
import Time from '../icons/time.png';

import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ name, image, category, time, rating }) => {
    const [like, setLike] = useState(false);
    const likeToggle = () => {
        setLike(!like)
    }
    return (
        <div className='card-container'>
            <div className='card '>
                <div className='card-info_container'>
                    <p className='recipe-name'>{name}</p>
                    <p className='recipe-category'>{category}</p>
                    <div className='recipe-rating'>
                        <Rating name='read-only' value={rating} readOnly sx={{ color: 'var(--green-secondary)' , fontSize: 42}}/>
                    </div>
                    <div className='cooking-time'>
                        <img src={Time} alt='cooking time' />
                        <p>{time}</p>
                    </div>

                    <div className='like'>
                        <button onClick={likeToggle}>{like ? <FavoriteBorderSharpIcon sx={{fontSize: 42}}/> : <FavoriteIcon sx={{fontSize: 42}}/>}</button>
                    </div>
                </div>
                <div className='card-image_container'>
                    <img src={image} alt='recipe image' />
                </div>
            </div>
        </div>
    )
}

export default Card;