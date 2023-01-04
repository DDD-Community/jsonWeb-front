import styled from '@emotion/styled';

export const CertifySection = styled.section`
  position: relative;
  padding: 0 20px;
  margin-top: 40px;
`;

export const EditSection = styled.section`
  position: absolute;
  top: 90px;
`;

export const ImagePreview = styled.div`
  width: 327px;
  height: 220px;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  border-radius: 10px;
  margin: 20px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SubmitSection = styled.section`
  position: absolute;
  top: 630px;
`;
