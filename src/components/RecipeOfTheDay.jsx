import './RecipeOfTheDay.css';
import Time from '../icons/time.png';
import PastaAlfredo from '../images/pasta_alfredo.jpg';
import Rating from '@mui/material/Rating';

const RecipeOfTheDay = () => {
    return (
        <div className='recipe-card'>
            <div className='block'>
            </div>
            <div className="recipe-card_main-container">
                <div className='info_container'>
                    <div className='rating'>
                        <p>Recipe of the day</p>
                        <Rating name='read-only' value={5} readOnly sx={{ color: 'var(--green-secondary)' }} />
                    </div>
                    <p className='recipe-name'>Pasta Alfredo</p>
                    <div className='description'>
                        <i>“Decadent Italian delight of perfectly cooked pasta and velvety sauce.”</i>
                    </div>
                    <div className='cooking-time_container'>
                        <img src={Time} alt='cooking time' />
                        <p>40 mins</p>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={PastaAlfredo} alt='recipe of the day' />
                </div>
            </div>


        </div>
    )
}

export default RecipeOfTheDay;