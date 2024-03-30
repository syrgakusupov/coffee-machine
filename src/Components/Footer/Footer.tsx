import React from 'react';
import '../../Styles/Footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <h2>МАСТЕР ПО РЕМОНТУ <br/> КОФЕМАШИН В МОСКВЕ</h2>
                <div className="content">
                    <div className="content_text">
                        <span>ИП Даренский Сергей Алексеевич</span>
                        <span>ИНН 234102890499 ОГРНИП 304234123200020</span>
                        <span>Политика конфиденциальности</span>
                    </div>
                    <div className="content_contact">
                        <p><b>Телефон:</b> <a href="tel: +7(966)666-21-04">+7 (966) 666-21-04</a></p>
                        <p><b>Почта:</b> <a href="">vash.kofemaster@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;