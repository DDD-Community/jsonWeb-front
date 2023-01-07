import {
  HeartGray,
  HeartPurple,
  Star,
  Location,
  Tag,
  AccessTime,
  DownArrow,
  Price,
  Tel,
} from '@src/assets/svg/icon';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import {
  CafeImage,
  CafeInfo,
  CafeMenu,
  CafeMenuWrapper,
  CafeReview,
  CafeTitle,
  SubMenuList,
  SubMenuItem,
  Wrapper,
} from './style';

const dummy = {
  data: {
    address: '주소',
    avgStar: 0,
    cafeId: 0,
    homepage: 'www.google.ocm',
    imageUrl:
      'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    isLiked: true,
    name: '카페 이름',
    openHourList: [
      {
        close: 'string',
        day: 'string',
        open: 'string',
      },
    ],
    priceList: [
      {
        day: '평일',
        headCount: '2인',
        price: 10000,
      },
      {
        day: '평일',
        headCount: '3인',
        price: 10000,
      },
      {
        day: '주말',
        headCount: '2인',
        price: 10000,
      },
    ],
    reviewCount: 2,
    tel: '02-123-4567',
    themeCount: 5,
  },
  message: 'string',
};

const subMenuList = [
  { name: '테마정보', path: '/cafe-detail' },
  { name: '리뷰', path: 'cafe/review' },
  { name: '인증', path: 'cafe/certification' },
];

export default function Detail() {
  return (
    <>
      <CafeImage src={dummy.data.imageUrl} />
      <Wrapper>
        <CafeTitle>
          <h1>{dummy.data.name}</h1>
          {dummy.data.isLiked ? <HeartPurple /> : <HeartGray stroke="gray" />}
        </CafeTitle>
        <CafeReview>
          <Star fill="#6B53DD" />
          <span>{dummy.data.avgStar}/5</span>
          <span>리뷰 ({dummy.data.reviewCount})</span>
        </CafeReview>
      </Wrapper>
      <Wrapper>
        <CafeInfo>
          <div>
            <Location />
          </div>
          <p>{dummy.data.address}</p>
        </CafeInfo>
        <CafeInfo>
          <div>
            <Tag />
          </div>
          <p>테마 {dummy.data.themeCount}개</p>
        </CafeInfo>
        <CafeInfo>
          <div>
            <AccessTime />
          </div>
          <p>영업 중</p>
          <p> · </p>
          <p>10:00 - 22:00</p>
          <DownArrow />
        </CafeInfo>
        <CafeMenuWrapper>
          <div>
            <Price />
          </div>
          <div>
            {dummy.data.priceList.map((price) => (
              <CafeMenu key={price.day}>
                <p>
                  {price.day}
                  {price.headCount}
                </p>
                <p>{price.price.toLocaleString()}원</p>
              </CafeMenu>
            ))}
          </div>
        </CafeMenuWrapper>
        <CafeInfo>
          <div>
            <Tel />
          </div>
          <p>{dummy.data.tel}</p>
        </CafeInfo>
      </Wrapper>
      <SubMenuList>
        {subMenuList.map((el) => (
          <SubMenuItemComponent path={el.path} title={el.name} />
        ))}
      </SubMenuList>
      <Outlet />
    </>
  );
}

type SubMenuPropsType = {
  path: string;
  title: string;
};

function SubMenuItemComponent({ path, title }: SubMenuPropsType) {
  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={path} key={title}>
      <SubMenuItem match={match}>{title}</SubMenuItem>
    </Link>
  );
}
