import React from 'react';
import './ProfilePage.css'
import Header from "../Header/Header";
import PaymentCard from "../PaymentCard/PaymentCard";

const ProfilePage = () => {
    return (
        <div className='profile'>
            <Header/>
            <section className="content">

                <PaymentCard/>
            </section>

        </div>
    );
};

export default ProfilePage;
