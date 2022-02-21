import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className='cards__items'>
                    <CardItem
                    src='images/image.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Klinik Pratama'
                    path='/services'
                    />
                    <CardItem
                    src='images/image 2.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Klinik Gigi'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/image 3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Klinik Utama'
                    path='/services'
                    />
                    <CardItem
                    src='images/image 4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Klinik Radiologi'
                    path='/products'
                    />
                    <CardItem
                    src='images/images 5.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Hospital'
                    path='/sign-up'
                    />
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
