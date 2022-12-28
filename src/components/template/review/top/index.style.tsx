import styled from '@emotion/styled';

const ReviewDetailTopContainer = styled.main`
  position: relative;
  border-bottom: 8px solid ${({ theme }) => `${theme.color.grayscale.gray_000}`};
  font-family: ${({ theme }) => `${theme.font.family}`};
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const ReviewDetailThumbnail = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 0px;
  object-fit: cover;
`;

const ReviewDetailContentsContainer = styled.section`
  padding: 20px 20px;
`;

const ReviewDetailTitle = styled.h1`
  font-size: ${({ theme }) => `${theme.font.size.xl}`};
  font-weight: ${({ theme }) => `${theme.font.weight.semiBold}`};
`;

const ReviewDetailGenreSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};
  color: ${({ theme }) => `${theme.color.grayscale.gray_700}`};
  margin-top: 10px;
`;
const ReviewDetailGenreItem = styled.div`
  height: 22px;
  white-space: nowrap;
  align-items: center;
  self-align: center;
  vertical-align: center;
  margin-right: 10px;
  padding: 5px 10px;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_000}`};
`;

export {
  ReviewDetailTopContainer,
  ReviewDetailContentsContainer,
  ReviewDetailThumbnail,
  ReviewDetailTitle,
  ReviewDetailGenreSection,
  ReviewDetailGenreItem,
};
