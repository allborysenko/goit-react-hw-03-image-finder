import css from '../../styles.module.css';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ webformatURL, id, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          openModal={() => openModal(largeImageURL, tags)}
          tag={tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
