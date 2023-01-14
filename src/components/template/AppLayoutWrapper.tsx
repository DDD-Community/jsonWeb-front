import styled from '@emotion/styled';
import { LayoutWrapperPropsType } from './PageLayoutWrapper';

const StyledAppLayoutWrapper = styled.div`
  max-width: 390px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;

export default function AppLayoutWrapper({ children }: LayoutWrapperPropsType) {
  return <StyledAppLayoutWrapper>{children}</StyledAppLayoutWrapper>;
}
