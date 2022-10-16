import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/HomeImageListRow.css';

const HomeImageListRow = (props) => {
  const { picture } = props;
  const {
    author, nosizeUrl, id,
  } = picture;

  const size1 = 200;
  const size2 = 200;
  const picsumUrlSmall = `${nosizeUrl}/${size1}/${size2}`;

  const style = { backgroundImage: `url(${picsumUrlSmall})`, width: `${size1}px`, height: `${size2}px` };

  return (
    <Link to="/details" state={id} key={id} className="row">
      <span style={style} />
      <div className="info">
        <span>Author: </span>
        <span>{author}</span>
      </div>
    </Link>
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
