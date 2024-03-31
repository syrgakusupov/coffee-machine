import React from 'react';
import '../Styles/TitlePage.scss'
const TitlePage = () => {
    return (
        <section className='titlePage'>
            <div className="containe">
                <h2>Ремонт кофемашин</h2>
                <p>
                    за 1 час прямо у вас домаДелаю срочный и качественный ремонт <br/>
                    кофемашин всех марок и типов независимо от года выпуска
                </p>
                <div>
                    <span>Гарантия качества и разумная цена на ремонт</span>
                    <span>Выезд и ремонт в день обращения</span>
                    <span>
                    Обращайтесь, постараюсь по цене
                    сориентировать по телефону
                </span>
                </div>
                <button><a href="tel: +7(966)666-21-04">Скидка при 35% заказе сегодня</a></button>
            </div>
        </section>
    );
};

export default TitlePage;