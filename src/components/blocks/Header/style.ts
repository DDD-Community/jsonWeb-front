import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 2px solid ${({ theme }) => `${theme.color.grayscale.gray_100}`};
`;
