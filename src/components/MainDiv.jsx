import './MainDiv.css';

import RecipeOfTheDay from './RecipeOfTheDay';
import SearchBar from './SearchBar';
import Buttons from './Buttons';

const MainDiv = () => {
    return (
        <div className='main-div'>
            <div className='image_container'>
                <div className='search-grid'>
                    <SearchBar />
                    <Buttons />
                </div>
                <div className='recipe-of-the-day_container'>
                    <RecipeOfTheDay />
                </div>

            </div>
        </div>
    )
}

export default MainDiv;
