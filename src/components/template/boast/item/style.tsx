import styled from '@emotion/styled';

export const FeedSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px;
  border-bottom: ${({ theme }) =>
    `8px solid ${theme.color.grayscale.gray_600}`};
  :last-child {
    border-bottom: 0;
  }
`;
