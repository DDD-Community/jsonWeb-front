import React from 'react';
import { useLocation } from 'react-router-dom';
import { LeftArrowBlack, Logo, Search } from '../../../assets/svg/icon';
import * as S from './style';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === '/search' ? (
        <S.Header>
          <button type="button">
            <LeftArrowBlack />
          </button>
          <p>검색</p>
          <button type="button">
            <Search />
          </button>
        </S.Header>
      ) : (
        <S.Header>
          <button type="button">
            <Logo />
          </button>
          <button type="button">
            <Search />
          </button>
        </S.Header>
      )}
    </div>
  );
}
