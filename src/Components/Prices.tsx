import React from 'react';
import '../Styles/Prices.scss'
const Prices = () => {
    const prices = [
        {
            title: 'Диагностика',
            price: 'БЕСПЛАТНО'
        },
        {
            title: 'Выезд на дом',
            price: 'БЕСПЛАТНО'
        },
        {
            title: 'Ремонт термоблока/пароблока',
            price: '440 руб.'
        },
        {
            title: 'Ремонт кофемолки',
            price: '410 руб.'
        },
        {
            title: 'Замена прокладок/уплотнителей',
            price: '320 руб.'
        },
        {
            title: 'Ремонт жерновов кофемолки',
            price: '480 руб.'
        },
        {
            title: 'Ремонт двигателя кофемолки',
            price: '500 руб.'
        },
        {
            title: 'Декальцинация',
            price: '420 руб.'
        },
        {
            title: 'Комплексная чистка, промывка системы',
            price: '370 руб.'
        },
        {
            title: 'Ремонт крана пара',
            price: '450 руб.'
        },
        {
            title: 'Ремонт счетчика воды',
            price: '300 руб.'
        },
        {
            title: 'Ремонт помпы',
            price: '350 руб.'
        },
        {
            title: 'Ремонт электронной платы',
            price: '520 руб.'
        },
        {
            title: 'Ремонт заварного механизма',
            price: '330 руб.'
        },

    ]
    return (
        <section className='price'>
            <div className='price_container'>
                <h1>Цены на ремонт</h1>
                <div className='price_container_item'>
                    {
                        prices.map((item)=> (
                            <div>
                                <div className='price_container_item_text'>
                                    <p>{item.title}</p>
                                    <span>{item.price}</span>
                                </div>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
                <button><a href="tel: +7 925 868-12-96">+7 925 868-12-96</a></button>
            </div>
        </section>
    );
};

export default Prices;