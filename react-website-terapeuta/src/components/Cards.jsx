// Importing necessary modules from react
import React from 'react';

// Importing the CardItem component and the styles for this component
import CardItem from './CardItem';
import './Cards.css';

// Defining the Cards function
function Cards() {
  return (
    // The cards div contains all the elements of the cards
    <div className='cards'>
      {/* The h1 element represents a first level heading */}
      <h1>Check out these EPIC Destinations!</h1>
      {/* The cards__container div is the container for the cards */}
      <div className='cards__container'>
        {/* The cards__wrapper div is the wrapper for the cards */}
        <div className='cards__wrapper'>
          {/* The ul element represents an unordered list of items */}
          <ul className='cards__items'>
            {/* The CardItem component is used to create a card item */}
            <CardItem
              src='./public/massage.PNG'
              text='Relajación profunda con técnicas tradicionales tailandesas'
              label='Masaje Tailandés'
              path='/services'
            />
            <CardItem
              src='./public/cuencos.PNG'
              text='Tranquilidad guiada con sonidos curativos'
              label='Cuencos Tibetanos'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./public/meditacion.PNG'
              text='Equilibrio mental y bienestar duradero'
              label='Meditación'
              path='/services'
            />
            <CardItem
              src='./public/piedras2.PNG'
              text='Armonía y sanación en piedras seleccionadas'
              label='Piedras Energéticas'
              path='/products'
            />
            <CardItem
              src='./public/mantras.PNG'
              text='Paz interior y conexión espiritual'
              label='Mantras'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

// Exporting the Cards function as a module to be used in other files
export default Cards;
