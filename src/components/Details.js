import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const id = location.state;

  const pictures = useSelector((state) => state.images);
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

export default Details;
