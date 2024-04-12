import { useState } from 'react';
import { ImagePreloadContainer } from './PreviewImage.styled';

function PreviewImage({ imageFile }) {
  const [preview, setPreview] = useState({});

  if (imageFile) {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => setPreview(reader.result);
  }

  return (
    <ImagePreloadContainer>
      <img src={preview} alt="" />
    </ImagePreloadContainer>
  );
}

export default PreviewImage;
