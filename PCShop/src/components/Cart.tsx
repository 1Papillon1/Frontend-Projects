import { render } from '@testing-library/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks';
import { getMemoizedNumitems } from '../redux/products/cartSlice';
import { getTotalPrice, updateQuantity } from '../redux/products/cartSlice';
import { CountryDropdown } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Cart() {
    // use 
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);
    const items = useAppSelector((state) => state.cart.items);
    const totalPrice = useAppSelector(getTotalPrice);
    const numItems = useAppSelector(getMemoizedNumitems);

    useEffect(() => {
        document.title = "CART | PCSHOP";
    }, [])

    // enums 
    type CartState = "Empty" | "Cart" | "Checkout" | "Ordered"

    const [cartState, setCartState] = useState<CartState>("Cart");
    const [country, setCountry] = useState("Croatia");
    const [value, setValue] = useState();
    const [phone, setPhone] = useState();

    // functions 
    function quantityChanged(e: React.FocusEvent<HTMLInputElement>, id: string) {
        const quantity = Number(e.target.value) || 0;
        dispatch( updateQuantity({ id, quantity }));
    }



    return(
        <div className="layout">
        {cartState == "Cart" && (
            <>
            <div className="layout__box">
            <h1 className="title">Cart</h1>
            <table className="table">
                <thead className="table__header">
                    <tr className="table__row">
                    <th className="table__header__column"></th>
                    <th className="table__header__column">Product name</th>
                    <th className="table__header__column">Quantity</th>
                    <th className="table__header__column" colSpan={2}></th>
                    <th className="table__header__column table__header__column--secondary">Subtotal</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {Object.entries(items).map(([id, quantity]) => (
                        <tr className="table__row">
                            <td className="table__row__data">
                                <img className="image image--secondary" src={`${products[id].src}`} alt=""/>
                            </td>
                            <td className="table__row__data">
                                {products[id].name}
                            </td>
                            <td className="table__row__data">
                                <input 
                                    type="number"
                                    className="input"
                                    defaultValue={quantity}
                                    onBlur={(e) => quantityChanged(e, id)}
                                    min = {1}
                                />
                            </td>
                            <td className="table__row__data" colSpan={2}>

                            </td>
                            <td className="table__row__data">
                                ${(products[id].price * quantity).toFixed(2)}
                            </td>
                        </tr>
                    ))}

                    <tr className="table__row">
                        <td className="table__row__data">
                            Total:
                        </td>
                        <td className="table__row__data" colSpan={4}></td>
                        <td className="table__row__data">${(Math.round(totalPrice * 100) / 100).toFixed(2)}</td>

                    </tr>
                    <tr>
                        <td className="table__row__data" colSpan={5}></td>
                        <td className="table__row__data">
                        <button className="button button--secondary" onClick={() => setCartState("Checkout")}>Checkout</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            </>
        )}

        {cartState == "Checkout" && (
            <>
            <div className="layout__box layout__box--secondary">
                <form className="form">
                <h1 className="title title--secondary">Checkout</h1>
                <label className="form__label" htmlFor="fname">First name</label>
                <input className="form__input" id="fname" required/> 
                <label className="form__label" htmlFor="lname">Last name</label>
                <input className="form__input" id="lname" required/>
                <label className="form__label" htmlFor="postalcode">Postal code</label>
                <input className="form__input" id="postalcode" value="" pattern="\d*" required/>
                <label className="form__label" htmlFor="address">Address line</label>
                <input className="form__input" id="address" required/>
                <label className="form__label" htmlFor="country">Country</label>
                <CountryDropdown
                    id="country"
                    value={country}
                    onChange={(val) => setCountry(val)}
                />
                <h2 className="form__title">Delivery Method</h2>
                <input className="form__radio" type="radio" id="standard" name="delivery_type" defaultChecked required/>
                <label className="form__label form__label--secondary" htmlFor="standard">Standard</label> <br/>
                <input className="form__radio" type="radio" id="express" name="delivery_type" required/>
                <label className="form__label form__label--secondary" htmlFor="express">Express Delivery ($9.99)</label>

                <label className="form__label" htmlFor="email">Email</label>
                <input className="form__input" id="email" required/>

                <label className="form__label" htmlFor="phone">Phone</label>
                <PhoneInput
                country={"us"}
                value={value}
                onChange={phone => setPhone(value)}
                />

                <input className="form__checkbox" type="checkbox" id="checkbox" required/>
                <label className="form__label form__label--secondary" htmlFor="checkbox">I agree to the terms & conditions.</label>
            </form>
            </div>
                <div className="layout__box layout__box--secondary">
                    <h2 className="layout__title">Summary Info</h2>
                    <h3 className="layout__title layout__title--secondary">Subtotal: ${totalPrice}</h3>
                </div>
            </>
        )}
        </div>

    )
}

export default Cart;