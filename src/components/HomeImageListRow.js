import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import '../styles/HomeImageListRow.css';

const HomeImageListRow = (props) => {
  const { picture } = props;
  const {
    author, nosizeUrl,
  } = picture;

  const size = '/50';
  const size1 = '/200/300';
  const picsumUrlComplete = `${nosizeUrl}${size}`;
  const picsumUrlComplete1 = `${nosizeUrl}${size1}`;

  const [state, updateState] = useState(false);
  const handleClick = () => {
    updateState(!state);
  };
  const styles = state ? { display: 'block' } : { display: 'none' };
  return (
    <tr onClick={() => handleClick()}>
      <td><img key={uuidv4()} src={picsumUrlComplete} alt="random" /></td>
      <td>| </td>
      <td>Author: </td>
      <td>{author}</td>
      <td style={styles} className="popup">
        this is the popup
        <button type="button" onClick={() => handleClick()}>X</button>
        <img key={uuidv4()} src={picsumUrlComplete1} alt="random" />
      </td>
    </tr>
  );
};

HomeImageListRow.defaultProps = {
  picture: {},
  author: '',
  nosizeUrl: '',
};

HomeImageListRow.propTypes = {
  picture: PropTypes.instanceOf(Object),
  author: PropTypes.string,
  nosizeUrl: PropTypes.string,
};

export default HomeImageListRow;
