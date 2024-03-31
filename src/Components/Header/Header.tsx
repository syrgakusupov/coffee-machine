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

                <button><a href="tel: +7 925 868-12-96">+7 925 868-12-96</a></button>
            </div>
        </header>
    );
};

export default Header;