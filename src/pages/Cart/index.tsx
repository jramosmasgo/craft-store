import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import Banner from '../../components/shared/Banner'
import { IProductCart } from '../../interfaces/productCart.interface'
import "./cart.css"

export const Cart: React.FunctionComponent = () => {
    const [dataCart, setDataCart] = useState<IProductCart[]>([]);

    useEffect(() => {
        const localStorageCart = localStorage.getItem('cart');

        if (localStorageCart) {
            setDataCart(JSON.parse(localStorageCart))
        }

    }, []);

    return (


        <>
            <Banner title='Mi carrito' />
            <div className='shopping-cart-content'>
                {dataCart?.length > 0 ?
                    <div className="shopping-cart">
                        <div className="shopping-cart-title">
                            <h2>Mi lista de compras</h2>
                            <p> Productos agregados: {dataCart?.length} </p>
                        </div>
                        {
                            dataCart?.map((item, index) =>
                                <div className="cart-item" key={index}>
                                    <img src={item.product.imgUrl} alt="Producto 1" className="cart-item-product-image" />
                                    <div className="cart-item-product-details">
                                        <div className='product-details-name'>
                                            <h3 className="cart-item-product-name">Nombre del Producto</h3>
                                            <p>{item.product.name}</p>
                                        </div>
                                        <input type="number" value={item.quantity} className="cart-item-product-quantity" disabled />
                                        <span className="cart-item-product-price">S/. {item.product.price * item.quantity}</span>
                                        <CgClose size={20} />
                                    </div>
                                </div>
                            )
                        }
                        <div className="total">
                            <h3>Total: S/. {dataCart?.reduce((n, { quantity, product }) => quantity * product.price + n, 0)}</h3>
                            <button className="checkout-button">Pagar</button>
                        </div>
                    </div>
                    : <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h1>No hay productos agregados</h1>
                    </div>
                }
            </div>
        </>
    )
}
