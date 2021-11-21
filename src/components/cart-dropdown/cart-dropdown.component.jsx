import React from 'react'
import './cart-dorpdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'


const CartDropdown = () =>(
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            <CustomButton>CHECKOUT ITEM</CustomButton>
        </div>
    </div>
)


export default CartDropdown;