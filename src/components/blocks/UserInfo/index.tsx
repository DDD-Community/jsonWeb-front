import { useCallback } from 'react';
import { generateUUID } from '@src/lib/util';
import { UserInfoType } from '@src/types/review';
import { BoldTextSpan, LikeBtn } from '@components/atom';
import { ROLE_USER_RANK } from '@constants/common';
import { CustomTheme as theme } from '@src/styles/Theme';
import { useReviewLikeMutation } from '@hooks/queries/review';
import {
  ReviewUserInfoSection,
  ReviewUserInfoContainer,
  ReviewUserIcon,
  ReviewUserTheme,
  ReviewUserThemeGenre,
  ReviewUserInfo,
  ReviewUserInfoBlock,
  ReviewUserLevel,
  ReviewUserBadge,
  ReviewModifiedAt,
  ReviewReport,
  ReviewLikeContainer,
} from './index.style';

export default function UserInfo({
  userInfo,
  contentId,
}: {
  userInfo: UserInfoType;
  contentId: number;
}) {
  const { mutate: handleLikeMutate } = useReviewLikeMutation({
    reviewId: contentId,
  });

  const handleLikeClick = useCallback(() => {
    handleLikeMutate();
  }, [handleLikeMutate]);

  const getBadgeColorHex = (level: string) => {
    if (level === 'LEVEL1') return theme.color.primary.green;
    if (level === 'LEVEL2') return theme.color.primary.kakao;
    if (level === 'LEVEL3') return theme.color.primary.orange;
    if (level === 'LEVEL4') return theme.color.primary.purple;
    return theme.color.grayscale.gray_700;
  };
  /**
   * @todo 신고하기 기능 추가
   */
  const reportHandler = (v: any) => v;

  return (
    <ReviewUserInfoSection>
      <ReviewUserIcon url={userInfo.profileImageUrl} />
      <ReviewUserInfoContainer>
        <ReviewUserTheme>
          <BoldTextSpan>{userInfo.themeName}</BoldTextSpan>
          {userInfo.themeGenre.map((v) => (
            <ReviewUserThemeGenre key={generateUUID()}>
              {' '}
              · {v}
            </ReviewUserThemeGenre>
          ))}
        </ReviewUserTheme>
        <ReviewUserInfo>
          <ReviewUserInfoBlock>
            <ReviewUserLevel>{userInfo.writerNickname}</ReviewUserLevel>
            <ReviewUserBadge
              color={getBadgeColorHex(ROLE_USER_RANK[userInfo.writerLevel])}
            >
              {userInfo.writerLevel}
            </ReviewUserBadge>
          </ReviewUserInfoBlock>
          <ReviewUserInfoBlock>
            <ReviewModifiedAt>{userInfo.modifiedAt}</ReviewModifiedAt>
          </ReviewUserInfoBlock>
          <ReviewUserInfoBlock>
            <ReviewReport onClick={reportHandler}>신고하기</ReviewReport>
          </ReviewUserInfoBlock>
        </ReviewUserInfo>
      </ReviewUserInfoContainer>
      <ReviewLikeContainer onClick={handleLikeClick}>
        <LikeBtn isLiked={userInfo.isLiked} count={userInfo.likeCount} />
      </ReviewLikeContainer>
    </ReviewUserInfoSection>
  );
}
