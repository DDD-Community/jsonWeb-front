import { Link, useLocation } from 'react-router-dom';
import { mypageListData } from '@src/lib/data/mypageData';
import {
  MyAccountContainer,
  Profile,
  ProfileImg,
  Level,
  Nickname,
  PointBar,
  PointProgress,
  PointText,
  Divider,
  MenuList,
  Menu,
  MenuIcon,
  MenuLabel,
} from './style';
import LikeList from './like';

type MenuItemPropsType = {
  title: string;
  to: string;
  image: string;
};

export default function MyAccount() {
  const { pathname } = useLocation();

  switch (pathname) {
    case '/my-account/like':
      return <LikeList />;
    default:
      return <MyPage />;
  }
}

function MyPage() {
  const myPoint = 50;
  const totalPoint = 100;
  const progress = Math.floor((myPoint / totalPoint) * 100);

  return (
    <MyAccountContainer>
      <Profile>
        <ProfileImg>
          <img
            src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80"
            alt="user profile img"
          />
        </ProfileImg>
        <Level>초보</Level>
        <Nickname>정의로운죠르디33</Nickname>
        <PointBar>
          <PointProgress now={progress} />
        </PointBar>
        <PointText>포인트 업데이트 예정입니다</PointText>
      </Profile>
      <Divider />
      <MenuList>
        {mypageListData.map((el) => (
          <MenuItem
            key={el.title}
            title={el.title}
            to={el.to}
            image={el.image}
          />
        ))}
      </MenuList>
    </MyAccountContainer>
  );
}

function MenuItem({ title, to, image }: MenuItemPropsType) {
  return (
    <Menu key={title}>
      <Link to={to}>
        <MenuIcon src={image} />
        <MenuLabel>{title}</MenuLabel>
      </Link>
    </Menu>
  );
}
