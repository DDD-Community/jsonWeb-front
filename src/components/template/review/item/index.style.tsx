import styled from '@emotion/styled';

const ReviewItemContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 28px;
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};

  &:not(:last-child) {
    border-bottom: 8px solid ${({ theme }) => theme.color.grayscale.gray_000};
  }
`;

const ReviewUserInfoSection = styled.section`
  position: relative;
  display: flex;
  margin: 0 20px;
`;

const ReviewUserIcon = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  background-image: url('${(props) => props.url}');
  background-color: ${({ theme }) => theme.color.grayscale.gray_000};
  background-size: cover;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
`;

const ReviewUserInfoContainer = styled.div`
  margin: 5px 10px;
`;

const ReviewUserTheme = styled.div`
  margin-bottom: 5px;
`;

const ReviewUserThemeGenre = styled.span`
  color: ${({ theme }) => theme.color.grayscale.gray_200};
`;

const ReviewUserInfo = styled.div`
  display: flex;
`;

const ReviewUserInfoBlock = styled.div`
  height: 12px;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  padding-right: 5px;

  &:not(:first-child) {
    padding: 0 5px;
  }
  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.grayscale.gray_000};
  }
`;

const ReviewUserNickName = styled.span`
  color: ${({ theme }) => theme.color.grayscale.gray_700};
`;

const ReviewUserBadge = styled.span<{ color: string | undefined }>`
  margin-left: 2px;
  color: ${(props) => props.color};
`;

const ReviewModifiedAt = styled.span`
  color: ${({ theme }) => theme.color.grayscale.gray_800};
`;

const ReviewReport = styled.button`
  color: ${({ theme }) => theme.color.grayscale.gray_800};
  cursor: pointer;
`;

const ReviewEmotionSection = styled.section`
  display: flex;
  margin: 20px 20px;
  gap: 8px;
`;

const ReviewEmotionItem = styled.span`
  height: 26px;
  background-color: ${({ theme }) => theme.color.grayscale.gray_300};
  border-radius: 5px;
  padding: 8px;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
`;

const ReviewRateSection = styled.section`
  display: block;
  margin: 0 20px;
`;

const ReviewItemContents = styled.div`
  display: -webkit-box;
  margin: 0 20px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 20px;
  margin-top: 18px;
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

const ReviewLikeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`;

export {
  ReviewItemContainer,
  ReviewUserInfoSection,
  ReviewUserInfoContainer,
  ReviewUserIcon,
  ReviewUserTheme,
  ReviewUserThemeGenre,
  ReviewUserInfo,
  ReviewUserInfoBlock,
  ReviewUserNickName,
  ReviewUserBadge,
  ReviewModifiedAt,
  ReviewReport,
  ReviewEmotionSection,
  ReviewEmotionItem,
  ReviewItemContents,
  ReviewRateSection,
  RateContainer,
  RateTitle,
  RateContents,
  ReviewLikeContainer,
};
