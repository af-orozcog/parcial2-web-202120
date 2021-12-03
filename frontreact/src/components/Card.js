import React from 'react';


/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
  const {name, picture, price, isActive} = props;

  const getClassName = (show) => {
    if (show == 'false') return 'card-inactive';
    else return '';
  }

  return (
    <div classname='card'>
      <div className={getClassName(isActive)}>
        <div className='card-header'>
          <p className='card-title'>{name}</p>
          <span className='material-icons card-favorite'>favorite_border</span>
        </div>
        <img className='card-img' src={picture} alt={name}/>
        <div className='card-bottom'>
          <p className='price'>$ {price}</p>
        </div>
      </div>
    </div>
  );
};
