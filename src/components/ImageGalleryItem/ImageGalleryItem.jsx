import css from 'styles.module.css';

const ImageGalleryItem = ({ webformatURL, openModal, tag }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={openModal}>
      <img src={webformatURL} alt={tag} />
    </li>
  );
};

export default ImageGalleryItem;
