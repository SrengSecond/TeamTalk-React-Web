import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Aux from '../hoc/Auxs'
import MenuItems from "../components/MenuItems/MenuItems";
import './Dropdown.css'
const Dropdown = () =>
{
    const [click,setClick] = useState(false)
    const handleClick = () =>
    {
        setClick(!click)
    }

    return (
        <Aux>
            <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
                onClick={handleClick}>
                {MenuItems.map((item,index) =>
                {
                    return (
                        <li key={index}>
                            <Link className={item.cName}
                                  to={item.path}
                                  onClick={() => setClick(false)}
                            >{item.title}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </Aux>
    );
};

export default Dropdown;
