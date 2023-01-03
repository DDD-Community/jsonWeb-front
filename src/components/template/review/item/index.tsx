import { ReviewType } from '@src/types/review';
import UserInfo from '@components/blocks/UserInfo';
import { RateType } from '@constants/common';
import { CustomTheme as theme } from '@src/styles/Theme';
import { StarRateSmall, LockRateSmall } from '@src/assets/svg/icon';
import {
  ReviewItemContainer,
  ReviewItemContents,
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
  return (
    <ReviewItemContainer>
      <UserInfo userInfo={reviewItem} />
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
