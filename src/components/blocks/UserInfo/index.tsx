import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateUUID } from '@src/lib/util';
import { UserInfoType } from '@src/types/types';
import { ReviewType } from '@src/types/review';
import { BoastType } from '@src/types/boast';
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
  const navigate = useNavigate();
  const handleLikeClick = useCallback(() => {
    likeMutate();
  }, [likeMutate]);

  const getBadgeColorHex = (level: string) => {
    if (level === ROLE_USER_RANK.LV1) return theme.color.level.first;
    if (level === ROLE_USER_RANK.LV2) return theme.color.level.second;
    if (level === ROLE_USER_RANK.LV3) return theme.color.level.third;
    if (level === ROLE_USER_RANK.LV4) return theme.color.level.fourth;
    return theme.color.grayscale.gray_100;
  };

  const isHasKeyInUserInfo = (property: string) =>
    Object.prototype.hasOwnProperty.call(userInfo, property);

  const reportHandler = () => {
    const typeFormatter = () => {
      let id;
      let type;

      if (isHasKeyInUserInfo('reviewId')) {
        type = 'review';
        id = (userInfo as ReviewType).reviewId;
      }
      if (isHasKeyInUserInfo('boastId')) {
        type = 'boast';
        id = (userInfo as BoastType).boastId;
      }

      return { type, id };
    };

    navigate(
      `/report/edit?type=${typeFormatter().type}&id=${typeFormatter().id}`
    );
  };

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
            <ReviewUserBadge color={getBadgeColorHex(userInfo.writerLevel)}>
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
