import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
  cursor: pointer;
`;

export const MenuItemContainer = styled.ul<{
  listLength: number;
  selectedItemId: number | null;
}>`
  ${({ listLength, selectedItemId }) => css`
    position: absolute;
    top: 20px;
    right: 0;
    max-height: 0;
    overflow: hidden;
    background: #ffffff;
    border-radius: 8px;
    z-index: 2;
    border: 1px solid transparent;

    &.open {
      border: 1px solid #f2f3f5;
      max-height: ${listLength * 30 + 24}px;
      transition: all 0.35s ease;
    }

    &.close {
      border: 1px solid transparent;
      max-height: 0px;
      transition: all 0.35s ease;
    }

    & > li {
      padding: 0 12px;

      &:first-child {
        padding-top: 12px;
      }
      &:last-child {
        padding-bottom: 12px;
      }
    }

    & > li > button {
      color: #999999;
    }

    li:nth-child(${(selectedItemId ?? 0) + 1}) > button {
      color: #000000;
      background-color: #f2f3f5;
    }
  `}
`;

export const MenuItem = styled.button`
  width: 96px;
  padding: 8px 0 8px 12px;
  border-radius: 8px;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;
