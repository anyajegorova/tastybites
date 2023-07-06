import { useState, useEffect } from 'react';
import './MainDiv.css';

import RecipeOfTheDay from './RecipeOfTheDay';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import Card from './Card';


// const FetchRecipe = async () => {
//     const apiKey = process.env.REACT_APP_API_KEY;

//     const [recipes, setRecipes] = useState([]);

//     const [start, setStart] = useState(0);
//     const [limit, setLimit] = useState(20);

//     const url = `https://yummly2.p.rapidapi.com/feeds/list?limit=${limit}&start=${start}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': apiKey,
//             'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setRecipes(result);
//         console.log(result)
//         console.log(recipes);
//     } catch (error) {
//         console.error(error);
//     }
//     return recipes;
// }

const cardCount = () => {
    const screenWidth = window.innerWidth;
    return screenWidth >= 1200 ? 6 : screenWidth >= 768 ? 2 : screenWidth >= 480 ? 1 : 1;
}

const MainDiv = () => {

    const [recipes, setRecipes] = useState({});
    const [finalRecipe, setFinalRecipe] = useState({});

    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(20);

    const url = `https://yummly2.p.rapidapi.com/feeds/list?limit=${limit}&start=${start}`;
    const apiKey = process.env.REACT_APP_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
    };
    const fetchRecipe = async () => {
        try {
            const response = await fetch(url, options);
            const recipe = await response.json()
            setRecipes(recipe);
            const recipeObject = {'name': recipe.feed[0].content.details.name,'image': recipe.feed[0].display.images[0], 'category': recipe.feed[0].content.details.displayName, 'time': recipe.feed[0].content.details.totalTime, 'rating': recipe.feed[0].content.reviews.averageRating}
            setFinalRecipe(recipeObject);
            console.log(finalRecipe)
        } catch (error) {
             console.error(error);
        }
    }

    useEffect(() => {
        fetchRecipe();
    }, []);

    

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
                <Card name={finalRecipe.name} image={finalRecipe.image} category={finalRecipe.category} time={finalRecipe.time} rating={finalRecipe.rating}/>
                {/* {recipes.slice(0, cardCount()).map((recipe, index) => (
                    <Card key={index} name={''} description={''} image={''} />
                ))} */}
            </div>
        </div>
    )
}

export default MainDiv;
