import { useState } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { MenuListItemType } from '@src/types/common';
import carouselImg from '../../assets/carouselImg.png';
import * as S from './style';
import { genreData } from '../../lib/data/genreData';
import { CardListItemType } from '../../types/types';
import { SideWrapper } from '../../components/template/PageLayoutWrapper';
import Menu from '../../components/blocks/Menu';
import CardList from '../../components/blocks/Card/CardList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftArrow, RightArrow } from '../../assets/svg/icon';

const MenuList: MenuListItemType[] = [
  { id: 0, name: '난이도 낮은순' },
  { id: 1, name: '난이도 높은순' },
  { id: 2, name: '리뷰 많은순' },
  { id: 3, name: '랭킹 순' },
  { id: 4, name: '최신순' },
];

const dummyData: CardListItemType[] = [
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'titletitletitletitletitletitle',
    description: 'descriptiondescriptiondescriptiondescriptiondescription',
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

const StyledContainer = styled.div`
  .slick-prev {
    left: 25px;
    z-index: 2;
  }
  .slick-next {
    right: 25px;
    z-index: 2;
  }
  .slick-dots {
    bottom: 20px;
  }
  .slick-dots li {
    width: 6px;
    height: 6px;
  }
  .slick-dots li button {
    width: 6px;
    height: 6px;
    padding: 0;
  }
  .slick-dots li button:before {
    width: 6px;
    height: 6px;
  }
  .slick-dots li button:before {
    color: white;
  }
`;
const StyledSlide = styled.div`
  width: 100%;
`;

function CustomSlide() {
  return (
    <StyledSlide>
      <img src={carouselImg} alt="캐러셀 이미지" />
    </StyledSlide>
  );
}

export default function CafeList() {
  const [cardList] = useState<CardListItemType[]>(dummyData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow style={{ left: '25px !important' }} />,
  };

  return (
    <StyledContainer>
      <Slider {...settings}>
        <CustomSlide />
        <CustomSlide />
        <CustomSlide />
        <CustomSlide />
        <CustomSlide />
        <CustomSlide />
      </Slider>
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
          <Menu list={MenuList} />
        </S.RoomListHeaderContainer>
        <CardList list={cardList} />
      </SideWrapper>
    </StyledContainer>
  );
}
