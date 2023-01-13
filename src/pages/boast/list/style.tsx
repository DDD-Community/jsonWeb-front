import styled from '@emotion/styled';

export const BoastContainer = styled.section``;

export const BoastHeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 25px 0px 25px;
`;

export const BoastListTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => `${theme.color.grayscale.gray_000}`};
`;

export const FeedSection = styled.section`
  width: 100%;
  border-bottom: 8px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px;
`;
