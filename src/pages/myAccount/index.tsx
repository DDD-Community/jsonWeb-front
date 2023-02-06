import { Link } from 'react-router-dom';
import { useGetCurrentUser } from '@hooks/queries/user';
import { useDefaultProfile } from '@hooks/useDefaultProfile';
import { mypageMenuData } from '@src/lib/data/mypageData';
import { MypageMenuItemType } from '@src/types/types';
import { ROLE_USER_RANK } from '@constants/common';
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

export default function MyAccount() {
  const userData = useGetCurrentUser();
  const defaultUserProfile = useDefaultProfile();

  const getGoal = (level: string) => {
    switch (level) {
      case ROLE_USER_RANK.LV1:
        return 100;
      case ROLE_USER_RANK.LV2:
        return 200;
      case ROLE_USER_RANK.LV3:
        return 300;
      case ROLE_USER_RANK.LV4:
        return 400;
      default:
        return 0;
    }
  };

  const myPoint: number = userData?.exp || 0;
  const totalPoint = getGoal(userData?.userLevel!);
  const progress = Math.floor((myPoint / totalPoint) * 100);

  return (
    <MyAccountContainer>
      <Profile>
        <ProfileImg url={userData?.profileImageUrl || defaultUserProfile} />
        <Level>{userData?.userLevel}</Level>
        <Nickname>{userData?.nickname}</Nickname>
        <PointBar>
          <PointProgress now={progress} />
        </PointBar>
        <PointText>{userData?.exp} 포인트</PointText>
      </Profile>
      <Divider />
      <MenuList>
        {mypageMenuData.map((el) => (
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

function MenuItem({ title, to, image }: MypageMenuItemType) {
  return (
    <Menu key={title}>
      <Link to={to}>
        <MenuIcon src={image} />
        <MenuLabel>{title}</MenuLabel>
      </Link>
    </Menu>
  );
}
