import React, { useState } from 'react';
import { HeartGray, HeartPurple, Star } from '../../../assets/svg/icon';
import { CardListItemType } from '../../../types/types';
import * as S from './style';

export default function Card({
  src,
  description,
  title,
  averageRating,
  reviewCount,
}: CardListItemType) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  return (
    <S.CardWrapper>
      <S.CardImgWrapper>
        <S.CardThumbnail src={src} alt={`${title} 이미지`} />
        <S.HeartIcon onClick={() => setIsHeartClicked(!isHeartClicked)}>
          {isHeartClicked ? <HeartPurple /> : <HeartGray stroke="white" />}
        </S.HeartIcon>
      </S.CardImgWrapper>
      <S.CardDescription>{description}</S.CardDescription>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardSubDescriptionWrapper>
        {averageRating && (
          <div>
            <p>
              <Star fill="#d9d9d9" />
            </p>
            <S.CardSubDescription>{averageRating}</S.CardSubDescription>
          </div>
        )}
        {reviewCount && (
          <S.CardSubDescription>리뷰 ({reviewCount})</S.CardSubDescription>
        )}
      </S.CardSubDescriptionWrapper>
    </S.CardWrapper>
  );
}
