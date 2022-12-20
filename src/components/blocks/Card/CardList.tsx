import * as S from './style';
import { CardListItemType } from '../../../types/types';
import Card from './Card';

type CardListPropsType = {
  list: CardListItemType[];
};
export default function CardList({ list }: CardListPropsType) {
  return (
    <S.CardListWrapper>
      {list.map((el) => (
        <Card
          key={el.title}
          title={el.title}
          description={el.description}
          averageRating={el.averageRating}
          reviewCount={el.reviewCount}
          src={el.src}
        />
      ))}
    </S.CardListWrapper>
  );
}
