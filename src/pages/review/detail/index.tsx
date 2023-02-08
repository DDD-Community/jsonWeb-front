import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewDetailTop,
  ReviewDetailBottom,
} from '@src/components/template/review';
import { ReviewDetailContainer } from './index.style';

export default function Detail() {
  const { themeId } = useParams() as any;
  const [param, setParam] = useState(themeId);

  useEffect(() => {
    setParam(themeId);
  }, []);

  return (
    <ReviewDetailContainer>
      <ReviewDetailTop themeId={param} />
      <ReviewDetailBottom themeId={param} />
    </ReviewDetailContainer>
  );
}
