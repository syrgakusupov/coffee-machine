import React, {useEffect, useState} from 'react';
import '../Styles/Brands.scss'
import axios from "axios";

interface IBrands {
    id: number
    image: string
}
const Brands = () => {
    const [brand, setBrand] = useState<IBrands[]>([])
        const fetchBrand = async () => {
            const res = await axios('http://localhost:3000/brand.json')
            setBrand(res.data)
        }
        useEffect(() => {
            fetchBrand()
        }, [])

    return (
        <section className='brands'>
            <div className='brands_container'>
                <h1>Ремонт популярных брендов</h1>

                <div className='brands_container_item'>
                    {
                        brand.map((item) => (
                            <div className='brands_container_item_image'>
                                <img src={item.image} alt=""/>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Brands;