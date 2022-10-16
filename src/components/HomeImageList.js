import React from 'react';
import PropTypes from 'prop-types';
import HomeImageListRow from './HomeImageListRow';

const HomeImageList = (props) => {
  const { pictures } = props;

  return (
    <section>
      { pictures.map((picture) => (
        <HomeImageListRow key={picture.id} picture={picture} />
      ))}
    </section>
  );
};

HomeImageList.defaultProps = {
  pictures: [],
};

HomeImageList.propTypes = {
  pictures: PropTypes.instanceOf(Array),
};

export default HomeImageList;
