import { useState } from 'react';
import { CardListItemType } from '@src/types/types';
import { SideWrapper } from '@components/template/PageLayoutWrapper';
import CardList from '@components/blocks/Card/CardList';
import { MyAccountContainer } from './style';

const dummyData: CardListItemType[] = [
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title1',
    description: 'address1',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title2',
    description: 'address2',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title3',
    description: 'address3',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title4',
    description: 'address4',
    averageRating: 4.5,
    reviewCount: 100,
  },
];

export default function LikeList() {
  const [cardList] = useState<CardListItemType[]>(dummyData);
  return (
    <MyAccountContainer>
      <SideWrapper>
        <CardList list={[...cardList].reverse()} />
      </SideWrapper>
    </MyAccountContainer>
  );
}
