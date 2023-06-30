import { useState } from 'react';
import './MainDiv.css';

import RecipeOfTheDay from './RecipeOfTheDay';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import Card from './Card';


const FetchRecipe = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const [recipies, setRecepies] = useState([]);

    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(0);

    const url = `https://yummly2.p.rapidapi.com/feeds/list?limit=${limit}&start=${start}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

const cardCount = () => {
    const screenWidth = window.innerWidth;
    return screenWidth >= 1200 ? 6 : screenWidth >= 768 ? 2 : screenWidth >= 480 ? 2 : 1;
}

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
            <div className='cards_container'>
                <Card />
            </div>
        </div>
    )
}

export default MainDiv;
