import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Viewer = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

export const Carousel = styled.div<{ curIdx: number }>`
  ${({ curIdx }) => css`
    display: flex;
    gap: 0;
    transform: translateX(-${curIdx}00%);
    transition: all 0.3s ease-in-out;
  `}
`;

export const CarouselItem = styled.img`
  width: 100%;
  height: 210px;
  display: block;
  object-fit: fill;
`;

export const BtnGroup = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
