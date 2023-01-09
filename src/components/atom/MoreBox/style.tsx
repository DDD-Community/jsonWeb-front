import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MoreBtnWrapper = styled.div`
  position: relative;
`;
export const MoreBtn = styled.button`
  cursor: pointer;
`;

export const MoreMenuContainer = styled.ul<{
  listLength: number;
}>`
  ${({ listLength, theme }) => css`
    position: absolute;
    top: 40px;
    right: 0;
    max-height: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 8px;
    z-index: 2;
    border: 1px solid transparent;

    &.open {
      border: 1px solid ${theme.color.grayscale.gray_700};
      max-height: ${listLength * 30 + 24}px;
      transition: all 0.35s ease;
      background: ${theme.color.primary.white};
      box-shadow: 0px 4px 8px ${theme.color.grayscale.gray_500};
    }

    &.close {
      border: 1px solid transparent;
      max-height: 0px;
      transition: all 0.35s ease;
      background: transparent;
    }

    & > li {
      padding: 0 12px;

      &:first-child {
        padding-top: 12px;
      }
      &:last-child {
        padding-bottom: 12px;
        button {
          color: ${theme.color.primary.red};
        }
      }
    }

    & > li > button {
      color: ${theme.color.grayscale.gray_000};
      :hover {
        cursor: pointer;
        background-color: ${theme.color.grayscale.gray_700};
      }
    }
  `}
`;

export const MenuItem = styled.button`
  width: 70px;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;
