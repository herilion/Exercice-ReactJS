import React from 'react'
import './Cart.css'

function Cart() {
    return (
        <div>
            <h3>Liste des livres</h3>
            <div className='cart1'>
                <p>Proverbe</p>
                <div className='group1'>
                    <p>80%</p>
                    <progress max="100" value="80"></progress>
                </div>
            </div>
            <div className='cart1'>
                <p>Proverbe</p>
                <div className='group1'>
                    <p>70%</p>
                    <progress max="100" value="70"></progress>
                </div>
            </div>
            <div className='cart1'>
                <p>tite</p>
                <div className='group1'>
                    <p>70%</p>
                    <progress max="100" value="70"> </progress>
                </div>
            </div>
            <div className='cart1'>
                <p>Philemon</p>
                <div className='group1'>
                    <p>70%</p>
                    <progress max="100" value="70"></progress>
                </div>
            </div>
            <div className='cart1'>
                <p>Proverbe</p>
                <div className='group1'>
                    <p>70%</p>
                    <progress max="100" value="70"></progress>
                </div>
            </div>
        </div>

    )
}

export default Cart