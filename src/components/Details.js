import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchImagesInfo } from '../redux/home';

const Details = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesInfo());
  }, [dispatch]);

  const pictures = useSelector((state) => state.images);
  const picturesList = pictures.map((picture) => <img key={uuidv4()} src={picture.picsumUrl} alt="random" />);

  return (
    <div className="profiles">
      <h2>Select a Category</h2>
      {picturesList}
      <h2>Second Image</h2>
    </div>
  );
};

export default Details;
