import './MainDiv.css';

import RecipeOfTheDay from './RecipeOfTheDay';
import SearchBar from './SearchBar';

const MainDiv = () => {
    return (
        <div className='main-div'>
            <div className='image_container'>
                <RecipeOfTheDay />
            </div>
        </div>
    )
}

export default MainDiv;
