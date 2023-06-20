import './SearchBar.css';
import Search from '../icons/search.png';

const SearchBar = () => {
    return (
        <div className='search-bar_container'>
            <div className='input'>
                <input />
            </div>
            <div className='search'>
                <img src={Search} />
            </div>

        </div>
    )
}

export default SearchBar;