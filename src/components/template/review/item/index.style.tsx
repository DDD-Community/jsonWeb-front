import styled from '@emotion/styled';

const ReviewItemContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 28px;
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};

  &:not(:last-of-type) {
    border-bottom: 8px solid
      ${({ theme }) => theme.color.legacyGrayscale.gray_000};
  }
`;

const ReviewEmotionSection = styled.section`
  display: flex;
  margin: 20px 24px;
  gap: 8px;
`;

const ReviewEmotionItem = styled.span`
  height: 26px;
  background-color: ${({ theme }) => theme.color.legacyGrayscale.gray_000};
  border-radius: 5px;
  padding: 8px;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
`;

const ReviewRateSection = styled.section`
  display: block;
  margin: 0 24px;
`;

const ReviewItemContents = styled.div`
  display: -webkit-box;
  margin: 0 24px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 20px;
  margin-top: 18px;

  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }
`;

const ReviewContentsMoreBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 28px;
  background: ${({ theme }) => theme.color.grayscale.gray_700};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.grayscale.gray_800} 0%,
    rgb(255 255 255 / 0%) 0%,
    ${({ theme }) => theme.color.primary.white} 10%
  );
  padding-right: 26px;
  max-height: 2rem;
  line-height: 18px;
  color: ${({ theme }) => theme.color.grayscale.gray_300};
  font-size: 12px;
  cursor: pointer;
  &.hide {
    display: none;
  }
`;

const RateContainer = styled.div`
  display: flex;
  margin-bottom: 7px;
`;

const RateTitle = styled.p`
  width: 60px;
  color: ${({ theme }) => theme.color.grayscale.gray_200};
  font-size: ${({ theme }) => `${theme.font.size.s}`};
`;

const RateContents = styled.p`
  margin-top: -2px;
`;

export {
  ReviewItemContainer,
  ReviewEmotionSection,
  ReviewEmotionItem,
  ReviewItemContents,
  ReviewRateSection,
  RateContainer,
  RateTitle,
  RateContents,
  ReviewContentsMoreBtn,
};
