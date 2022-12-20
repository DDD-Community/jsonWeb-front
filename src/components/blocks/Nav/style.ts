import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { PathMatch } from 'react-router-dom';

export const NavContainer = styled.ul`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 375px;
  background-color: #fff;
  z-index: 9;
`;

export const NavItem = styled.li<{ match: PathMatch<string> | null }>`
  ${({ match }) => css`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    p {
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      color: ${match ? '#6B53DD;' : '#bbbbbb'};
    }
  `}
`;
