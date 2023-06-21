import './MainDiv.css';

import RecipeOfTheDay from './RecipeOfTheDay';
import SearchBar from './SearchBar';
import Buttons from './Buttons';

const MainDiv = () => {
    return (
        <div className='main-div'>
            <div className='image_container'>
                <RecipeOfTheDay />
                <div className='search-grid'>
                    <SearchBar />
                </div>
                

            </div>
        </div>
    )
}

export default MainDiv;
