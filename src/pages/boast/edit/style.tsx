import styled from '@emotion/styled';

export const BoastSection = styled.section`
  position: relative;
  padding: 0 20px;
  margin-top: 40px;
`;

export const EditSection = styled.section`
  position: absolute;
  top: 90px;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.div<{ url: string | null }>`
  width: 327px;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0 10px 0;
  background-color: ${({ theme }) => theme.color.grayscale.gray_600};
  background-image: url('${(props) => props.url}');
  background-size: cover;
`;

export const ImageSizeCaution = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.color.primary.red};
`;

export const SubmitSection = styled.section`
  position: absolute;
  top: 630px;
`;
