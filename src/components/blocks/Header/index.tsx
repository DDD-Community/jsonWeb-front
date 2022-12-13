import { Logo, Search } from '../../../assets/svg/icon';
import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <button type="button">
        <Logo />
      </button>
      <button type="button">
        <Search />
      </button>
    </S.Header>
  );
}
