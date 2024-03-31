import React, {useEffect, useState} from 'react';
import '../Styles/Malfunctions.scss'
import {IMalfunctions} from "../Interface";
import axios from "axios";
const Malfunctions = () => {
    const [db, setDb] = useState<IMalfunctions[]>([])

    useEffect(() => {
        fetchDb()
    }, [])
    const fetchDb = async () => {
        const response = await axios('http://localhost:3000/db.json')
        setDb(response.data)
    }
    return (
        <div className='malfunctions' id='id1'>

            <section className='containe'>
                <h1>Популярные неисправности кофемашин</h1>
                    <div className='map'>
                        {
                            db.map((item) => (
                                <div key={item.id} className='product'>
                                    <img src={item.image} alt=""/>
                                    <div className='text'>
                                        <p>{item.title}</p>
                                        <span>От{item.price} руб.</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </section>
        </div>
    );
};

export default Malfunctions;