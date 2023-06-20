import './MainDiv.css';
import RecipeOfTheDay from './RecipeOfTheDay';

const MainDiv = () => {
    return (
        <div className='main-div'>
            <div className='image_container'>
                <RecipeOfTheDay />
            </div>
            <div className='card_container'>

            </div>
        </div>
    )
}

export default MainDiv;
