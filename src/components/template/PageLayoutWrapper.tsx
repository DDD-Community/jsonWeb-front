import styled from '@emotion/styled';
import React from 'react';

export type LayoutWrapperPropsType = {
  children: React.ReactNode;
};

const StyledSideWrapper = styled.div`
  padding: 0 24px;
`;

export function SideWrapper({ children }: LayoutWrapperPropsType) {
  return <StyledSideWrapper>{children}</StyledSideWrapper>;
}

const StyledBottomNavWrapper = styled.div`
  margin-bottom: 60px;
`;

export function BottomNavWrapper({ children }: LayoutWrapperPropsType) {
  return <StyledBottomNavWrapper>{children}</StyledBottomNavWrapper>;
}
