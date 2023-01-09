import styled from '@emotion/styled';

export const FeedHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_800}`};
  border-top: 1px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  border-bottom: 1px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 25px;
  p {
    font-size: ${({ theme }) => `${theme.font.size.m}`};
    color: ${({ theme }) => `${theme.color.grayscale.gray_100}`};
  }
`;
