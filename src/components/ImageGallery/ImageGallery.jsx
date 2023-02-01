import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webImg={webformatURL}
            largeImg={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};
