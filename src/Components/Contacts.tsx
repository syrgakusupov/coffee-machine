import React from 'react';
import '../Styles/Contacts.scss'
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { CgMail } from "react-icons/cg";

const Contacts = () => {
    return (
        <section className='con'>
            <div className='containe'>
                <a href='https://wa.me/79258681296'><FaWhatsapp style={{background:'#a23c09', borderRadius:5}}/></a>
                <a href='https://t.me/SyrgakUsupov'><PiTelegramLogo style={{background:'#a23c09', borderRadius:5}}/></a>
                <a href='https://mail.google.com/mail/u/0/#inbox/Kydriavi133@mail.ru'><CgMail style={{background:'#a23c09', borderRadius:5}}/></a>
            </div>
        </section>
    );
};

export default Contacts;