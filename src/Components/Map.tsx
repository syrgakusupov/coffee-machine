import React from 'react';
import '../Styles/Map.scss'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { WiTime1 } from "react-icons/wi";
import { MdOutlineStarBorder } from "react-icons/md";
const Map = () => {
    return (
        <section className='map'>
            <div className='map_container'>
                <h1>График и адрес</h1>
                <div className='map_container_content'>
                    <div className='map_container_content_item'>
                        <p><IoShieldCheckmarkOutline /></p>
                        <div className='map_container_content_item_text'>
                            <b>Работаем</b>
                            <span>круглосуточно</span>
                        </div>
                    </div>
                    <div className='map_container_content_item'>
                        <p><WiTime1 /></p>
                        <div className='map_container_content_item_text'>
                            <b>Ремонт за</b>
                            <span>20 минут при вас</span>
                        </div>
                    </div>
                    <div className='map_container_content_item'>
                        <p><MdOutlineStarBorder /></p>
                        <div className='map_container_content_item_text'>
                            <b>Гарантия</b>
                            <span>качества</span>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7507.205105422919!2d74.59256584893625!3d42.83842118015919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb61f8eba31d5%3A0xa84c40ec477ce475!2sAtaturk%20Park!5e0!3m2!1sru!2skg!4v1711788451130!5m2!1sru!2skg" width="1300" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
};

export default Map;