import styled from '@emotion/styled';
import { LayoutWrapperPropsType } from './PageLayoutWrapper';

const StyledAppLayoutWrapper = styled.div`
  max-width: 375px;
  min-height: 1950px;
  margin: 0 auto;
  background-color: #fff;
`;

export default function AppLayoutWrapper({ children }: LayoutWrapperPropsType) {
  return <StyledAppLayoutWrapper>{children}</StyledAppLayoutWrapper>;
}
