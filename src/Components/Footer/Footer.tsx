import React from 'react';
import '../../Styles/Footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='containe'>
                <h2>МАСТЕР ПО РЕМОНТУ <br/> КОФЕМАШИН В МОСКВЕ</h2>
                <div className="content">
                    <div className="content_contact">
                        <p><b>Телефон:</b> <a href="tel: +7 925 868-12-96">+7 925 868-12-96</a></p>
                        <p><b>Почта:</b> <a href="">Kydriavi133@mail.ru</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;