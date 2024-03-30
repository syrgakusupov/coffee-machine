import React from 'react';
import '../Styles/Services.scss';
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
    return (
        <section className='services'>
            <div className='services_container'>
                <h1>Дополнительные услуги</h1>
               <div className='services_container_content'>
                   <div className='services_container_content_block1'>
                       <h2>Чистка <IoIosArrowForward/></h2>
                       <ul>
                           <p>от кофейных масел (декофенация)</p>
                           <p>озаварочного блока</p>
                           <p>гидросистемы</p>
                           <p>промывка узлов</p>
                           <p>дезинфекция</p>
                       </ul>

                   </div>
                   <div className='services_container_content_block2'>
                       <h2>Декальцинация <IoIosArrowForward/></h2>
                       <ul>
                           <p>удаление пробок кальция</p>
                           <p>очистка от накипи</p>
                       </ul>

                   </div>
                   <div className='services_container_content_block3'>
                       <h2>Сервисное обслуживание <IoIosArrowForward/></h2>
                       <ul>
                           <p>консультации</p>
                           <p>регулировка настроек</p>
                           <p>очистка и декальцинация внутренних поверхностей</p>
                           <p>замена запчастей</p>
                           <p>тестирование кофемашины</p>
                       </ul>
                   </div>
               </div>
            </div>
        </section>
    );
};

export default Services;