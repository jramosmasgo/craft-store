import React from 'react'
import CardProduct from '../../components/shared/CardProduct'
import './products.css'
import Banner from '../../components/shared/Banner'
import { products } from '../../config/temp/products'

const Products: React.FunctionComponent = () => {
    return (
        <>
            <Banner title='Nuestro Productos' />
            <div className='products'>
                <div className="products-search">
                    <input type="text" className="products-search_input" placeholder="Buscar productos..." />
                    <button className="products-search_button">Buscar</button>
                </div>
                <div className="products-content">
                    {
                        products.map((item) => {
                            return <div key={item.id} className="products-content_item" data-aos="fade-in">
                                <CardProduct product={item} />
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products;