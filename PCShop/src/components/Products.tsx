import { useEffect } from "react";
import { getProducts } from "../redux/app/api";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks";
import { receivedProducts } from "../redux/products/productsSlice";
import { addItem } from '../redux/products/cartSlice';


function Products() {

    // document title 
    useEffect(() => {
        document.title = "PRODUCTS | PCShop";
    })

   const dispatch = useAppDispatch();

   useEffect(() => {
       getProducts().then((products) => {
           dispatch(receivedProducts(products));
       })
   })

   const products = useAppSelector(state => state.products.products);

    return (
    <div className="layout">
        <div className="container">
            <div className="flex">
                {Object.values(products).map((product) => (
                    <div className="flex__box">
                        <img className="image" src={`${product.src}`}/>
                        <h3 className="flex__box__title">{product.name}</h3>
                        <p className="flex__box__paragraph">{product.description}</p>
                        <h2 className="flex__box__title flex__box__title--secondary">${product.price}</h2>
                        <div className="flex flex--secondary">
                            <button onClick={() => dispatch(addItem(product.id))} className="button">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Products;