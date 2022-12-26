import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const GenreContainer = styled.ul`
  display: flex;
  width: 100%;
  gap: 8px;
  overflow-y: scroll;
  padding: 34px 20px 46px 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GenreListItem = styled.label<{
  src: string;
}>`
  ${({ theme, src }) => css`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 48px;
    padding: 10px 50px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.color.primary.white};
    font-weight: ${theme.font.weight.regular};
    background: url(${src}),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat, no-repeat;
    background-position: bottom right, left;
    background-blend-mode: color-dodge;

    input:checked + & {
      font-weight: 600;
      background: url(${src}),
        linear-gradient(
          96.4deg,
          rgba(213, 254, 64, 0.8) 3.42%,
          rgba(138, 233, 233, 0.8) 96.91%
        );
      background-blend-mode: color-dodge;
    }
  `}
`;

export const HiddenRadioBtn = styled.input`
  display: none;
`;

export const RoomListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;

export const RoomListTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #111;
`;
