import styled from '@emotion/styled';

const ReviewUserInfoSection = styled.section`
  position: relative;
  display: flex;
  margin: 0 20px;
`;

const ReviewUserIcon = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  background-image: url('${(props) => props.url}');
  background-color: ${({ theme }) => theme.color.legacyGrayscale.gray_000};
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
  color: ${({ theme }) => theme.color.legacyGrayscale.gray_200};
`;

const ReviewUserInfo = styled.div`
  display: flex;
`;

const ReviewUserInfoBlock = styled.div`
  height: 12px;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  padding-right: 5px;

  &:not(:first-of-type) {
    padding: 0 5px;
  }
  &:not(:last-of-type) {
    border-right: 1px solid
      ${({ theme }) => theme.color.legacyGrayscale.gray_000};
  }
`;

const ReviewUserNickName = styled.span`
  color: ${({ theme }) => theme.color.legacyGrayscale.gray_700};
`;

const ReviewUserBadge = styled.span<{ color: string | undefined }>`
  margin-left: 2px;
  color: ${(props) => props.color};
`;

const ReviewModifiedAt = styled.span`
  color: ${({ theme }) => theme.color.legacyGrayscale.gray_800};
`;

const ReviewReport = styled.button`
  color: ${({ theme }) => theme.color.legacyGrayscale.gray_800};
  cursor: pointer;
`;

const ReviewLikeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`;

export {
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
  ReviewLikeContainer,
};
