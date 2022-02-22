import React, {useState} from 'react';
import './styles.scss'
import ImageNotFound from 'assets/images/image-not-found.png'
const Card = ({title, subtitle, text, image, descriptionRight}) => {
  const [defaultImage,setDefaultImage] = useState(null)
  const handleSetDefaultImage = () => setDefaultImage(ImageNotFound)
  return (
    <div className="card">
      <img
        src={defaultImage||image}
        onError={handleSetDefaultImage}
      />
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="description">
          <div className="text">{text}</div>
          {descriptionRight}
        </div>
      </div>

    </div>
  );
};

export default Card;
