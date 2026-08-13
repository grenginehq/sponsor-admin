import { useRef } from "react";
import {
  ImageContent,
  ImageFileInput,
  ImageIcon,
  ImageInput,
  ImageLabel,
  ImageSubtext,
  ImageText,
  StyledImage,
} from "./styles";
import { Icon } from "../../components/Icon";

interface UploadImageProps {
  label: string;
  name: string;
}
const UploadImage = ({ label, name }: UploadImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledImage>
      <ImageLabel htmlFor={name}>{label}</ImageLabel>
      <ImageFileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        id={name}
      />
      <ImageInput>
        <ImageContent>
          <ImageIcon>
            <Icon icon="imageUpload" />
          </ImageIcon>
          <ImageText>Drop your image here, or browse</ImageText>
          <ImageSubtext>Supports: PNG, JPG, JPEG, WEBP</ImageSubtext>
        </ImageContent>
      </ImageInput>
    </StyledImage>
  );
};

export default UploadImage;
