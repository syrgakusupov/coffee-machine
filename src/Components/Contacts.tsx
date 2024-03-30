import React from 'react';
import '../Styles/Contacts.scss'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { RiFacebookCircleLine } from "react-icons/ri";
const Contacts = () => {
    return (
        <section className='con'>
            <div className='container'>
                <a href='https://web.whatsapp.com/'><FaWhatsapp style={{background:'#a23c09', borderRadius:5}}/></a>
                <a href='https://www.instagram.com/'><FaInstagram style={{background:'#a23c09', borderRadius:5}}/></a>
                <a href='https://www.google.com/intl/ru/gmail/about/'><CgMail style={{background:'#a23c09', borderRadius:5}}/></a>
                <a href='https://www.facebook.com/?locale=ru_RU'><RiFacebookCircleLine style={{background:'#a23c09', borderRadius:5}}/></a>
            </div>
        </section>
    );
};

export default Contacts;