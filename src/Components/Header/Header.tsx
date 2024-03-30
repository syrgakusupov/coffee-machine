import React from 'react';
import logo from '../../Images/logoo.svg'
import '../../Styles/Header.scss'
const Header = () => {
    return (
        <header className='Header'>
                <div className="container">
                <img src={logo} alt=""/>

                <ul>
                    <a href="">Неисправности</a>
                    <a href="">Цены</a>
                    <a href="">Бренды</a>
                    <a href="sd">Отзывы</a>
                </ul>

                <button><a href="tel: +7(966)666-21-04">+7 (966) 666-21-04</a></button>
            </div>
        </header>
    );
};

export default Header;