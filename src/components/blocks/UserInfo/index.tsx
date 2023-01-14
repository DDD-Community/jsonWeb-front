import { useCallback } from 'react';
import { generateUUID } from '@src/lib/util';
import { UserInfoType } from '@src/types/types';
import { BoldTextSpan, LikeBtn } from '@components/atom';
import { ROLE_USER_RANK } from '@constants/common';
import { CustomTheme as theme } from '@src/styles/Theme';
import { useDefaultProfile } from '@hooks/useDefaultProfile';
import {
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
} from './index.style';

export default function UserInfo({
  userInfo,
  likeMutate,
}: {
  userInfo: UserInfoType;
  likeMutate: () => void;
}) {
  const defaultUserProfile = useDefaultProfile();
  const handleLikeClick = useCallback(() => {
    likeMutate();
  }, [likeMutate]);

  const getBadgeColorHex = (level: string) => {
    if (level === ROLE_USER_RANK.LV1) return theme.color.primary.green;
    if (level === ROLE_USER_RANK.LV2) return theme.color.primary.kakao;
    if (level === ROLE_USER_RANK.LV3) return theme.color.primary.orange;
    if (level === ROLE_USER_RANK.LV4) return theme.color.primary.purple;
    return theme.color.grayscale.gray_100;
  };
  /**
   * @todo 신고하기 기능 추가
   */
  const reportHandler = (v: any) => v;

  return (
    <ReviewUserInfoSection>
      <ReviewUserIcon url={userInfo.writerProfileImage || defaultUserProfile} />

      <ReviewUserInfoContainer>
        <ReviewUserTheme>
          <BoldTextSpan>{userInfo.themeName}</BoldTextSpan>
          {userInfo.genre.map((v) => (
            <ReviewUserThemeGenre key={generateUUID()}>
              {' '}
              · {v}
            </ReviewUserThemeGenre>
          ))}
        </ReviewUserTheme>
        <ReviewUserInfo>
          <ReviewUserInfoBlock>
            <ReviewUserNickName>{userInfo.writerNickname}</ReviewUserNickName>
            <ReviewUserBadge color={getBadgeColorHex(userInfo.writerBadge)}>
              {userInfo.writerBadge}
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
