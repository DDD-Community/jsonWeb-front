import { generateUUID } from '@src/lib/util';
import { UserInfoType } from '@src/types/review';
import { BoldTextSpan, LikeBtn } from '@components/atom';
import { ROLE_USER_RANK } from '@constants/common';
import { CustomTheme as theme } from '@src/styles/Theme';
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

export default function UserInfo({ userInfo }: { userInfo: UserInfoType }) {
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
            <ReviewUserNickName>{userInfo.writerNickname}</ReviewUserNickName>
            <ReviewUserBadge
              color={getBadgeColorHex(ROLE_USER_RANK[userInfo.nickname])}
            >
              {userInfo.nickname}
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
      <ReviewLikeContainer>
        <LikeBtn isLiked={userInfo.isLiked} count={userInfo.likeCount} />
      </ReviewLikeContainer>
    </ReviewUserInfoSection>
  );
}
