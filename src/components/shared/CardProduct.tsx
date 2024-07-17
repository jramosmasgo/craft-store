import React from 'react'
import "./shared.css"
import Swal from 'sweetalert2'
import { IProduct } from '../../interfaces/product.interface'
import { IProductCart } from '../../interfaces/productCart.interface'


const CardProduct: React.FunctionComponent<{ product: IProduct }> = ({
    product
}) => {

    const addProductoToCart = (product: IProduct) => {
        Swal.fire({
            title: "Agregar el producto a tu carrito?",
            text: "Para confirmar presione OK",
            icon: "question"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const localStorageCart = localStorage.getItem('cart');

                if (localStorageCart) {
                    const products: IProductCart[] = JSON.parse(localStorageCart);
                    const productFound = products.find(x => x.product.id === product.id);

                    if (productFound) {
                        products.map((val) => {
                            if (val.product.id == product.id) {
                                val.quantity = val.quantity + 1;
                            }
                        })
                        Swal.fire("Agregado!", "", "success");
                    } else {
                        products.push({ product: product, quantity: 1 })
                        Swal.fire("Agregado!", "", "success");
                    }

                    localStorage.removeItem('cart');
                    localStorage.setItem('cart', JSON.stringify(products));
                } else {
                    const newProduct: IProductCart[] = [{ product, quantity: 1 }];
                    localStorage.setItem('cart', JSON.stringify(newProduct))
                    Swal.fire("Agregado!", "", "success");
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    return (
        <div className="product-card">
            <img src={product.imgUrl} alt="Imagen del producto" className="product-image" />
            <div className="product-info">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-price">S/. {product.price.toString()}</p>
                <p style={{ color: "silver", textAlign: 'center', marginBottom: "20px" }}>{product.description}</p>
                <button className="buy-button" onClick={() => addProductoToCart(product)} >Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default CardProduct