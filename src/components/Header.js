import { useState } from 'react';
import Logo from './Logo';


const Header = () => {

    const [title, setTitle] = useState("Lunch Box");
    return (
        <div className='header'>
            <Logo/>

            <h1>{title}</h1>
            <button className='title-btn' onClick={() => {
                if(title === "Lunch Box")
                {setTitle("New Lunch Box")}
                else
                {setTitle("Lunch Box")}
            }}>Click Me</button>

            <div className='nav-items'>
               <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Cart</li>
               </ul>
            </div>
        </div>
        
    )
}

export default Header