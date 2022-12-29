import { ReviewType } from '@src/types/review';
import { ReviewItemContainer } from './index.style';

export default function ReviewItem({ reviewItem }: { reviewItem: ReviewType }) {
  return <ReviewItemContainer>{reviewItem.content}</ReviewItemContainer>;
}
