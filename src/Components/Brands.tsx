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
        <section className='brands' id='id3'>
            <div className='brands_containe'>
                <h1>Ремонт популярных брендов</h1>

                <div className='brands_containe_item'>
                    {
                        brand.map((item) => (
                            <div key={item.id} className='brands_containe_item_image'>
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