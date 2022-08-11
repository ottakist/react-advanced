import React from 'react';
// import Props from 'prop-types';
import defaultImg from '../../../assets/default-image.jpeg';
const Product = ({ name, price, image }) => {
  const url = image && image.url;
  return (
    <article className='product'>
      <h4>{name}</h4>
      <img src={url || defaultImg} alt={name} />
      <p>${price || 300}</p>
    </article>
  );
};
// Product.propTypes = {
//   image: Props.object.isRequired,
//   name: Props.string.isRequired,
//   price: Props.number.isRequired
// };
// Product.defaultProps={
//   name:'default name',
//   price:3.99,
//   img:defaultImg
// }

export default Product;
