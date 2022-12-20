import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import * as S from './style';
import { navListData } from '../../../lib/data/navData';
import { NavGray, NavPurple } from '../../../assets/svg/icon';

export default function Nav() {
  return (
    <S.NavContainer>
      {navListData.map((el) => (
        <NavItem key={el.title} title={el.title} to={el.to} />
      ))}
    </S.NavContainer>
  );
}

type NavItemPropsType = {
  to: string;
  title: string;
};

function NavItem({ to, title }: NavItemPropsType) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <S.NavItem match={match} key={title}>
      <Link to={to}>
        <button type="button">
          {match ? <NavPurple /> : <NavGray />}
          <p>{title}</p>
        </button>
      </Link>
    </S.NavItem>
  );
}
