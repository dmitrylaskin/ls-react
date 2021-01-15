import React from 'react';
import './PaymentCard.css'

const PaymentCard = () => {
    return (
        <div className='payment-card'>
            <h2 className='payment-card__title'>Профиль</h2>
            <span className='payment-card__subtitle'>Ввдеите платежные данные</span>
            <div className='payment-card__data'>
                <form action="" className='payment-card__form'>
                    <input type="text"/>
                    <input type="text"/>
                    <div>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                </form>
                <div className='payment-card__card'></div>
            </div>
            <a href="" className='payment-card__btn'></a>

        </div>
    );
};

export default PaymentCard;
