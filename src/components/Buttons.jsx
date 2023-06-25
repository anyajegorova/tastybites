import './Buttons.css';

import Burger from '../icons/burger_white.png';
import Pizza from '../icons/pizza_white.png';
import Chicken from '../icons/chicken_white.png';
import Steak from '../icons/steak_white.png';
import Cake from '../icons/cake_white.png';
import Veg from '../icons/Veg.png';

const ButtonStyled = (props) => {
    return (
        <div className={props.class_name}>
            {props.icon && <img src={props.icon} alt={props.icon} />}
        </div>
    )
}


const Buttons = () => {
    const icons = [Burger, Pizza, Chicken, Steak, Cake, Veg];

    return (
        <div className='buttons_container'>
            <div className='upper-buttons_container'>
                {icons.map((icon, index) => (
                    <ButtonStyled icon={icon} class_name='round-button' key={index} />
                ))}

            </div>
            <div className='lower-buttons_container'>
                <button className='chip-button' >Breakfast</button>
                <button className='chip-button' >Lunch</button>
                <button className='chip-button' >Dinner</button>
            </div>

        </div>
    )
}


export default Buttons;