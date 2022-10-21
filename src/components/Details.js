import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>{author}</h2>
      <br />
      <section className="section">
        <article className="a">
          <h3>No filter</h3>
          <img src={picsumUrl} alt="image1" />
          <p>
            Size:
            {height}
            /
            {width}
            px
          </p>
          <br />
        </article>
        <article className="b">
          <h3>Filter: Blur</h3>
          <img src={blurUrl} alt="image2" />
          <p>
            Size:
            {height}
            /
            {width}
            px
          </p>
          <br />
        </article>
        <article className="c">
          <h3>Filter: Grayscale</h3>
          <img src={grayUrl} alt="image3" />
          <p>
            Size:
            {height}
            /
            {width}
            px
          </p>
        </article>
      </section>
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
