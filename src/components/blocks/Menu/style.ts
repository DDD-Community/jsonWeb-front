import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MenuBtnWrapper = styled.div`
  position: relative;
`;
export const MenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #111111;
`;

export const MenuItemContainer = styled.ul<{
  isOpen: boolean;
}>`
  ${({ isOpen }) => css`
    position: absolute;
    top: 20px;
    right: 0;
    padding: ${isOpen ? '12px' : '0'};
    background: #f8f8f8;
    border: 1px solid #f2f3f5;
    border-radius: 8px;
    z-index: 2;
  `}
`;

export const MenuItem = styled.button`
  width: 96px;
  padding: 8px 0 8px 12px;
  border-radius: 8px;
  text-align: left;
  color: #999999;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  &:hover {
    color: #000000;
    background: #f2f3f5;
  }
`;
