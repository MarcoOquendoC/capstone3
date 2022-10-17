import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { useLocation } from 'react-router-dom';
let pictures = [];

const Details = (props) => {
  const { id } = props;

  pictures = useSelector((state) => state.images);

  const filteredPictures = pictures.filter((picture) => picture.id === id);
  const {
    author, blurUrl, grayUrl, height, width, picsumUrl,
  } = filteredPictures[0];

  return (
    <main>
      <h2>{author}</h2>
      <img src={picsumUrl} alt="image1" />
      <p>
        Size:
        {height}
        /
        {width}
      </p>
      <h3>{author}</h3>
      <h3>Filter: Blur</h3>
      <img src={blurUrl} alt="image3" />
      <h3>Filter: Grayscale</h3>
      <img src={grayUrl} alt="image2" />
      <h3>{author}</h3>
    </main>
  );
};

Details.defaultProps = {
  id: pictures[0] ? pictures[0].id : 0,
};

Details.propTypes = {
  id: PropTypes.number,
};

export default Details;
