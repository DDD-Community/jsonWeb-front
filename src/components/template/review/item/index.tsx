import { generateUUID } from '@src/lib/util';
import { ReviewType } from '@src/types/review';
import { BoldTextSpan, LikeBtn } from '@components/atom';
import { ROLE_USER_RANK, RateType } from '@constants/common';
import { CustomTheme as theme } from '@src/styles/Theme';
import { StarRateSmall, LockRateSmall } from '@src/assets/svg/icon';
import {
  ReviewItemContainer,
  ReviewUserInfoSection,
  ReviewItemContents,
  ReviewUserInfoContainer,
  ReviewUserIcon,
  ReviewUserTheme,
  ReviewUserThemeGenre,
  ReviewUserInfo,
  ReviewLikeContainer,
  ReviewUserInfoBlock,
  ReviewUserNickName,
  ReviewUserBadge,
  ReviewModifiedAt,
  ReviewReport,
  ReviewEmotionSection,
  ReviewEmotionItem,
  ReviewRateSection,
  RateContainer,
  RateTitle,
  RateContents,
} from './index.style';

function ReviewRate({ type, len }: { type: string; len: number }) {
  const isActive = (i: any) =>
    len <= i ? theme.color.grayscale.gray_400 : theme.color.primary.purple;

  const getRateTitle = (v: string) => {
    if (v === RateType.STAR) return '만족도';
    if (v === RateType.LOCK) return '체감 난이도';
    return '';
  };

  return (
    <RateContainer>
      <RateTitle>{getRateTitle(type)}</RateTitle>
      <RateContents>
        {[...Array(5)].map((_, i) => {
          if (type === RateType.LOCK)
            return <LockRateSmall fill={isActive(i)} />;
          return <StarRateSmall fill={isActive(i)} />;
        })}
      </RateContents>
    </RateContainer>
  );
}

export default function ReviewItem({ reviewItem }: { reviewItem: ReviewType }) {
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
    <ReviewItemContainer>
      <ReviewUserInfoSection>
        <ReviewUserIcon url={reviewItem.profileImageUrl} />
        <ReviewUserInfoContainer>
          <ReviewUserTheme>
            <BoldTextSpan>{reviewItem.themeName}</BoldTextSpan>
            {reviewItem.themeGenre.map((v) => (
              <ReviewUserThemeGenre key={generateUUID()}>
                {' '}
                · {v}
              </ReviewUserThemeGenre>
            ))}
          </ReviewUserTheme>
          <ReviewUserInfo>
            <ReviewUserInfoBlock>
              <ReviewUserNickName>
                {reviewItem.writerNickname}
              </ReviewUserNickName>
              <ReviewUserBadge
                color={getBadgeColorHex(ROLE_USER_RANK[reviewItem.nickname])}
              >
                {reviewItem.nickname}
              </ReviewUserBadge>
            </ReviewUserInfoBlock>
            <ReviewUserInfoBlock>
              <ReviewModifiedAt>{reviewItem.modifiedAt}</ReviewModifiedAt>
            </ReviewUserInfoBlock>
            <ReviewUserInfoBlock>
              <ReviewReport onClick={reportHandler}>신고하기</ReviewReport>
            </ReviewUserInfoBlock>
          </ReviewUserInfo>
        </ReviewUserInfoContainer>
        <ReviewLikeContainer>
          <LikeBtn isLiked={reviewItem.isLiked} count={reviewItem.likeCount} />
        </ReviewLikeContainer>
      </ReviewUserInfoSection>
      <ReviewEmotionSection>
        {reviewItem.emotionFirst && (
          <ReviewEmotionItem>{reviewItem.emotionFirst}</ReviewEmotionItem>
        )}
        {reviewItem.emotionSecond && (
          <ReviewEmotionItem>{reviewItem.emotionSecond}</ReviewEmotionItem>
        )}
      </ReviewEmotionSection>
      <ReviewRateSection>
        <ReviewRate type={RateType.STAR} len={reviewItem.star} />
        <ReviewRate type={RateType.LOCK} len={reviewItem.difficulty} />
      </ReviewRateSection>
      <ReviewItemContents>{reviewItem.content}</ReviewItemContents>
    </ReviewItemContainer>
  );
}
