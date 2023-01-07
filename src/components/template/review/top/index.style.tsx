import styled from '@emotion/styled';

const ReviewDetailTopContainer = styled.main`
  position: relative;
  border-bottom: 8px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  font-family: ${({ theme }) => `${theme.font.family}`};
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};
`;

const ReviewDetailThumbnail = styled.img`
  width: 100%;
  height: 200px;
  padding: 0 0px;
  object-fit: cover;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_100}`};
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
  color: ${({ theme }) => `${theme.color.grayscale.gray_100}`};
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
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_600}`};
`;

const ReviewDetailRateSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  color: ${({ theme }) => `${theme.color.grayscale.gray_300}`};
  margin-top: 12px;
  align-items: center;
`;

const ReviewDetailRate = styled.p`
  margin-left: 5px;
  margin-top: 2px;
`;

const ReviewCountText = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => `${theme.color.grayscale.gray_200}`};
`;

const ReviewDetailInfoBoxSection = styled.section`
  display: flex;
  width: 327px;
  height: 71px;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_800}`};
  color: ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  border-radius: 10px;
  margin: 20px 0;
`;

const ReviewDetailInfoBox = styled.div`
  width: 109px;
  height: 39px;
  flex-wrap: nowrap;
  text-align: center;
  self-align: center;
  margin-top: 17px;

  &:not(:last-of-type) {
    border-right: 1px solid
      ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  }
`;

const ReviewDetailInfoTitle = styled.h2`
  color: ${({ theme }) => `${theme.color.grayscale.gray_200}`};
  font-size: ${({ theme }) => `${theme.font.size.s}`};
`;

const ReviewDetailInfoParagraph = styled.p`
  margin-top: 9px;
  color: ${({ theme }) => `${theme.color.grayscale.gray_100}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
`;

const ReviewDetailDescriptionSection = styled.section`
  position: relative;
  margin: 12px 0;
`;

const DescriptionTitle = styled.h2`
  font-size: ${({ theme }) => `${theme.font.size.l}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
  padding: 12px 0;
`;

const DescriptionContents = styled.p`
  display: -webkit-box;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  line-height: 18px;

  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }
`;

const DescriptionMoreBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.color.grayscale.gray_700};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.grayscale.gray_800} 0%,
    rgb(255 255 255 / 0%) 0%,
    ${({ theme }) => theme.color.primary.white} 30%
  );
  padding-left: 20px;
  max-height: 2rem;
  line-height: 18px;
  color: ${({ theme }) => theme.color.grayscale.gray_300};
  font-size: 12px;
  cursor: pointer;
  &.hide {
    display: none;
  }
`;

export {
  ReviewDetailTopContainer,
  ReviewDetailContentsContainer,
  ReviewDetailThumbnail,
  ReviewDetailTitle,
  ReviewDetailGenreSection,
  ReviewDetailGenreItem,
  ReviewDetailRateSection,
  ReviewDetailRate,
  ReviewCountText,
  ReviewDetailInfoBoxSection,
  ReviewDetailInfoBox,
  ReviewDetailInfoTitle,
  ReviewDetailInfoParagraph,
  ReviewDetailDescriptionSection,
  DescriptionTitle,
  DescriptionContents,
  DescriptionMoreBtn,
};
