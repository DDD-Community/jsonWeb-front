import { useParams } from 'react-router-dom';
import {
  ReviewDetailTop,
  ReviewDetailBottom,
} from '@src/components/template/review';
import { ReviewDetailContainer } from './index.style';

export default function Detail() {
  const { themeId } = useParams() as any;

  return (
    <ReviewDetailContainer>
      <ReviewDetailTop themeId={themeId} />
      <ReviewDetailBottom themeId={themeId} />
    </ReviewDetailContainer>
  );
}
