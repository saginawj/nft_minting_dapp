import React from 'react';
import './Gallery.css';
import CardItem from './CardItem';

function Gallery() {
  return (
    <div className='cards'>
      <h1>Here's a few sample pics.  One could be yours!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='config/images/face1.png'
              text='Sample image'
              path='/services'
            />
            <CardItem
              src='config/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='config/images/face1.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='config/images/face1.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='config/images/face1.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
