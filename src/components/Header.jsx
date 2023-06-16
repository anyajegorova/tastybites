import './Header.css';
import Cook from '../icons/cook.png';
import Favourites from '../icons/favourites.png';
import Menu from '../icons/menu hamburger.png';
import Account from '../icons/account white.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='upper-header_container'>
                <div className='category-links_container'>
                    <a href='#'>Italian</a>
                    <a href='#'>Asian</a>
                    <a href='#'>American</a>
                    <a href='#'>Mexican</a>
                    <a href='#'>French</a>

                </div>
                <div className='logo_container'>
                    <p>Tastybites</p>
                    <img src={Cook} />

                </div>

            </div>
            <div className='lower-header_container'>
                <div className='menu'>
                    <a href='#'><img src={Menu} /></a>
                </div>
                <div className='account'>
                    <a href='#'><img src={Favourites} /></a>
                    <a href='#'style={{marginLeft: 50}}><img src={Account} /></a>
                </div>


            </div>
        </header>
    )
}

export default Header;