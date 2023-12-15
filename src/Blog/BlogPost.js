import PropTypes from 'prop-types';

const BlogPost = ({ increment, title, content, imageUrl }) => {

  return (
    <div>
    <div className="col-lg-6">
      <div className="card mb-4">
        <div className="card-body">
          <h2 className='card-title'>{increment}</h2>
          <img className='image' src={imageUrl} alt="" />
          <h2 className="card-title h4">{title}</h2>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
    <br></br>
    </div>
  );
};

BlogPost.propTypes = {
  increment: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default BlogPost;
