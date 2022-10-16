import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();

  const id = location.state;

  const size = '/200/300/';
  const URL = `https://picsum.photos/id/${id}/${size}`;

  const pictures = useSelector((state) => state.images);
  const filteredPictures = pictures.filter((picture) => picture.id === id);
  const { author } = filteredPictures[0];

  return (
    <div className="profiles">
      <h2>{author}</h2>
      <img src={URL} alt="random" />
      <h2>Second Image</h2>
    </div>
  );
};

export default Details;
