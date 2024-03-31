import React from 'react';
import '../Styles/Prices.scss'
const Prices = () => {
    const prices = [
        {
            id: 1,
            title: 'Диагностика',
            price: 'БЕСПЛАТНО'
        },
        {
            id: 2,
            title: 'Выезд на дом',
            price: 'БЕСПЛАТНО'
        },
        {
            id: 3,
            title: 'Ремонт термоблока/пароблока',
            price: '440 руб.'
        },
        {
            id: 4,
            title: 'Ремонт кофемолки',
            price: '410 руб.'
        },
        {
            id: 5,
            title: 'Замена прокладок/уплотнителей',
            price: '320 руб.'
        },
        {
            id: 6,
            title: 'Ремонт жерновов кофемолки',
            price: '480 руб.'
        },
        {
            id: 7,
            title: 'Ремонт двигателя кофемолки',
            price: '500 руб.'
        },
        {
            id: 8,
            title: 'Декальцинация',
            price: '420 руб.'
        },
        {
            id: 9,
            title: 'Комплексная чистка',
            price: '370 руб.'
        },
        {
            id: 10,
            title: 'Ремонт крана пара',
            price: '450 руб.'
        },
        {
            id: 11,
            title: 'Ремонт счетчика воды',
            price: '300 руб.'
        },
        {
            id: 12,
            title: 'Ремонт помпы',
            price: '350 руб.'
        },
        {
            id: 13,
            title: 'Ремонт электронной платы',
            price: '520 руб.'
        },
        {
            id: 14,
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
                            <div key={item.id}>
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