import { useState } from 'react';
import * as S from './style';
import { LeftArrow, RightArrow } from '../../../assets/svg/icon';
import { CarouselListItemType } from '../../../types/types';

type CarouselPropsType = {
  list: CarouselListItemType[];
};

export default function Carousel({ list }: CarouselPropsType) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const TOTAL_ITEM = list.length;

  const prevItem = () => {
    if (currentIndex === 0) {
      setCurrentIndex(TOTAL_ITEM);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextItem = () => {
    if (currentIndex >= TOTAL_ITEM) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <S.Viewer>
      <S.Carousel curIdx={currentIndex}>
        {list.map((el) => (
          <S.CarouselItem key={el.id} src={el.src} alt="캐러셀 이미지" />
        ))}
      </S.Carousel>
      <S.BtnGroup>
        <button
          disabled={currentIndex === 0}
          type="button"
          onClick={() => prevItem()}
        >
          <LeftArrow />
        </button>
        <button
          disabled={currentIndex === TOTAL_ITEM - 1}
          type="button"
          onClick={() => nextItem()}
        >
          <RightArrow />
        </button>
      </S.BtnGroup>
    </S.Viewer>
  );
}
