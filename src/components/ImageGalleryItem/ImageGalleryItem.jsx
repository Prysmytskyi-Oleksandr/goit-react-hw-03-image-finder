const ImageGalleryItem = ({ key, webImg, largeImg }) => {
  return (
    <li>
      <img src={webImg} alt="" />
    </li>
  );
};
//   return (
//     <li key={image.id} class="gallery-item">
//       <img src={image.webformatURL} alt="foto" />
//     </li>
//   );
// };

export default ImageGalleryItem;
