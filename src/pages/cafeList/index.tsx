import { useState } from 'react';
import Carousel from '../../components/blocks/Carousel';
import carouselImg from '../../assets/carouselImg.png';
import * as S from './style';
import { genreData } from '../../lib/data/genreData';
import { CardListItemType, CarouselListItemType } from '../../types/types';
import { SideWrapper } from '../../components/template/layoutWrapper';
import Menu from '../../components/blocks/Menu';
import CardList from '../../components/blocks/Card/CardList';

const carouselImageList: CarouselListItemType[] = [
  { id: 0, src: carouselImg },
  { id: 1, src: carouselImg },
  { id: 2, src: carouselImg },
];

const MenuList: string[] = [
  '난이도 낮은순',
  '난이도 높은순',
  '리뷰 많은순',
  '랭킹 순',
  '최신순',
];

const dummyData: CardListItemType[] = [
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
    averageRating: 4.5,
    reviewCount: 100,
  },
];

export default function CafeList() {
  const [cardList] = useState<CardListItemType[]>(dummyData);
  return (
    <>
      <Carousel list={carouselImageList} />
      <S.GenreContainer>
        {genreData.map((el) => (
          <li key={el.id}>
            <S.HiddenRadioBtn name="genre" type="radio" id={`${el.id}`} />
            <S.GenreListItem src={el.src} htmlFor={`${el.id}`}>
              {el.name}
            </S.GenreListItem>
          </li>
        ))}
      </S.GenreContainer>
      <SideWrapper>
        <S.RoomListHeaderContainer>
          <S.RoomListTitle>방 탈출 카페</S.RoomListTitle>
          <Menu list={MenuList} onClickItem={() => console.log('a')} />
        </S.RoomListHeaderContainer>
        <CardList list={cardList} />
      </SideWrapper>
    </>
  );
}
