import React from 'react';
import './Gallery.css';
import CardItem from './CardItem';

function Gallery() {
  return (
    <div className='cards'>
      <h1>Here's a few sample pics. </h1>
      <h1>Given this project is generative, the final rarity and pictures will not be known until minting is complete. </h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='config/images/face2.png'
              text='Tiled Face'
              label='Super Rare'
              path='/services'
            />
            <CardItem
              src='config/images/face3.png'
              text='Blurred Face'
              label='Normal'
              path='/products'
            />
            <CardItem
              src='config/images/face4.png'
              text='Fractial Tattoos'
              label='Rare'
              path='/sign-up'
            />
             <CardItem
              src='config/images/face5.png'
              text='Unmatched Eyes'
              label='Normal'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
