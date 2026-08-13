import styled from "@emotion/styled";
import {
  black,
  InstrumentSans,
  secondary01,
  secondary12,
} from "../../styles/abstracts/colors";

export const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  width: 100%;
  height: auto;
`;

export const ImageInput = styled.div`
  border-radius: 8px;
  border: 2px dashed ${secondary01};
  background: ${secondary12};
  display: flex;
  padding: 8px 0 48px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const ImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ImageFileInput = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`;

export const ImageText = styled.p`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ImageSubtext = styled.p`
  color: ${black};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4px;
  width: 100%;
  height: 100%;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageLabel = styled.label`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
