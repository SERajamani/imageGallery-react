import './ImageGallery.css';

import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <img src={image1} alt="Gallery 1" className="gallery-image" />
        <div className="image-name">Ms Dhoni</div>
      </div>
      <div className="gallery-item">
        <img src={image2} alt="Gallery 2" className="gallery-image" />
        <div className="image-name">Virat Kohli</div>
      </div>
      <div className="gallery-item">
        <img src={image3} alt="Gallery 3" className="gallery-image" />
        <div className="image-name">Rohith Sharma</div>
      </div>
      <div className="gallery-item">
        <img src={image4} alt="Gallery 4" className="gallery-image" />
        <div className="image-name">Hardik Pandiya</div>
      </div>
      <div className="gallery-item">
        <img src={image5} alt="Gallery 5" className="gallery-image" />
        <div className="image-name">Suryakumar Yadav</div>
      </div>
      <div className="gallery-item">
        <img src={image6} alt="Gallery 6" className="gallery-image" />
        <div className="image-name">Rishabh Pant</div>
      </div>
    </div>
  );
};

export default ImageGallery;
