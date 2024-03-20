// Importing necessary modules from react
import React from 'react';

// Importing the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Defining the CardItem function
function CardItem(props) {
  return (
    // The <> and </> are shorthand for React.Fragment which allows you to return multiple elements in a render method without creating an additional DOM element
    <>
      {/* The li element represents a list item */}
      <li className='cards__item'>
        {/* The Link component is used for navigation */}
        <Link className='cards__item__link' to={props.path}>
          {/* The figure element represents self-contained content, like illustrations, diagrams, photos, code listings, etc. */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* The img element represents an image */}
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          {/* The div element is a container unit that encapsulates other page elements and divides the HTML document into sections */}
          <div className='cards__item__info'>
            {/* The h5 element represents a fifth level heading */}
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

// Exporting the CardItem function as a module to be used in other files
export default CardItem;
