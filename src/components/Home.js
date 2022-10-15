import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImagesInfo } from '../redux/home';
import HomeImageList from './HomeImageList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesInfo());
  }, [dispatch]);

  const searchParameter = useSelector((state) => state.search);
  const searchState = new RegExp(searchParameter, 'ig');

  const pictures = useSelector((state) => state.images);
  const filteredPictures = pictures.filter((picture) => searchState.test(picture.author));

  return (
    <div className="profiles">
      <h2>Images</h2>
      <table>
        <HomeImageList pictures={filteredPictures} />
      </table>
    </div>
  );
};

export default Home;
