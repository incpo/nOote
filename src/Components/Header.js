import { Navbar } from 'react-bulma-components';
import { useState } from 'react';

export default function Header () {

    const [burger,setBurger] = useState()

    const BurgerF = () => {
        (burger !== 'is-active') ? setBurger('is-active') : setBurger('')
    }


    return(
        <Navbar mb='6'>
            <Navbar.Brand>
                <Navbar.Item href='/'>
                <img src="/icons/logo.png" alt="noOte logo" style={{maxHeight: "40px"}}/>
                </Navbar.Item>
                <Navbar.Burger onClick={BurgerF}/>
            </Navbar.Brand>
            <Navbar.Menu pt='3' className={burger}>
                <Navbar.Container>
                    <Navbar.Item href='/about'>
                    About
                    </Navbar.Item>
                    <Navbar.Item href='/create'>
                    Create note
                    </Navbar.Item>
                    <Navbar.Item href='/note'>
                    Read note
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align='end'>
                    <Navbar.Item  href='https://github.com/FinLoik/nOote'>
                        <b>GitHub</b>
                    </Navbar.Item>
                </Navbar.Container>
                
            </Navbar.Menu>
        </Navbar>
    )
}