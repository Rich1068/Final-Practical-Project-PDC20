import PropTypes from 'prop-types';
import '../Css/home.css';

const BlogPost2 = ({ increment, title, content, imageUrl }) => {
  return (
    
      <div className="cardd mb-4">
        <div className="card-bodyy">
            <div className='imageee'>
              <h2 className='card-number'>{increment}</h2>
              <img src={imageUrl} alt="NO UPLOADED IMAGE" />
            </div>

            <div className="line"></div>
            <div className='content-div'>
              <br></br>
              
              <h2 className="card-titlee"><u>{title}</u></h2>
              <br></br>
              <p className="card-textt">{content}</p>
            </div>
          </div>
      
      
      <br></br>
    </div>
  );
};

BlogPost2.propTypes = {
  increment: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default BlogPost2;
