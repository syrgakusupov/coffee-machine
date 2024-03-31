import React from 'react';
import '../Styles/About.scss'
import aboutImage from '../Images/aboutimage.webp'
import { IoArrowRedoSharp } from "react-icons/io5";
const About = () => {
    return (
        <section className="about">
            <div className="container">
                <img src={aboutImage} alt=""/>
                <div className='text'>
                    <h1>Обо мне</h1>
                    <div>
                        <p>Я Кудрявцев Данил Михайлович - частный мастер по ремонту <br/>
                            кофемашин и кофеварок.
                        </p>
                        <p> <IoArrowRedoSharp /> Выезд и диагностика бесплатно. Гарантия до 2 лет!</p>
                        <p> <IoArrowRedoSharp /> Цены ниже, чем у компаний, а качество лучше. Делаю</p>
                        <p>все на совесть, как для себя. <br/>
                            Работаю с 7:00 до 23:00 без выходных!
                        </p>
                    </div>
                    <div>
                        <p>
                            Опыт работы уже более 10 лет, имею высшее техническое <br/>
                            образование! Готов выполнить ремонт вашей <br/>
                            кофемашины в максимально короткие сроки:
                        </p>
                        <p> <IoArrowRedoSharp /> Звоните сейчас, договоримся, приеду быстро!</p>
                        <p> <IoArrowRedoSharp /> Самый быстрый ремонт в день обращения!</p>
                    </div>
                    <div>
                        <p>
                            Занимаюсь оперативным и качественным ремонтом и <br/>
                            обслуживанием кофемашин и кофеварок известных марок <br/>
                            разной сложности любого года производства.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;