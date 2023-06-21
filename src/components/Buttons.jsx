import Burger from '../icons/burger_white.png';
import Pizza from '../icons/pizza_white.png';
import Chicken from '../icons/chicken_white.png';
import Steak from '../icons/steak_white.png';
import Cake from '../icons/cake_white.png';

const ButtonStyled = (icon) => {
    <div className='round-button'>
        <img src={icon} />
    </div>
}


const Buttons = () => {
    return (
        <div className='buttons_container'>
            <div className='upper-buttons_container'>

            </div>
            <div className='lower-buttons_container'>

            </div>

        </div>
    )
}

export default Buttons;