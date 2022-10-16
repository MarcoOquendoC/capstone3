import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import '../styles/HomeImageListRow.css';

const HomeImageListRow = (props) => {
  const { picture } = props;
  const {
    author, nosizeUrl, id,
  } = picture;

  const size = '/50';
  const picsumUrlSmall = `${nosizeUrl}${size}`;

  const style = {
    root: {
      backgroundImage: `url(${picsumUrlSmall})`,
      overflow: 'hidden',
    },
  };

  return (
    <p style={style}>
      <Link to="/details" state={id} key={id}>
        <span><img key={uuidv4()} src={picsumUrlSmall} alt="random" /></span>
        <span>| </span>
        <span>Author: </span>
        <span>{author}</span>
        <span>{id}</span>
      </Link>
    </p>
  );
};

HomeImageListRow.defaultProps = {
  picture: {},
  author: '',
  id: '',
  nosizeUrl: '',
};

HomeImageListRow.propTypes = {
  picture: PropTypes.instanceOf(Object),
  author: PropTypes.string,
  id: PropTypes.string,
  nosizeUrl: PropTypes.string,
};

export default HomeImageListRow;
