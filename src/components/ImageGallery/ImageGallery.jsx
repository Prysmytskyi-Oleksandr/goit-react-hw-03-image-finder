import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      <ImageGalleryItem images={images} />
    </ul>
  );
};

export default ImageGallery;
