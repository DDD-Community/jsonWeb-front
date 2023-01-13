import styled from '@emotion/styled';

export const FeedWrapper = styled.section`
  margin-top: 12px;
`;

export const FeedImage = styled.div`
  width: 327px;
  height: 327px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HashtagWrapper = styled.div`
  width: 327px;
  display: flex;
  justify-content: flex-start;
`;

export const Hashtag = styled.div`
  width: fit-content;
  height: 26px;
  border-radius: 4px;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  color: ${({ theme }) => `${theme.color.grayscale.gray_000}`};
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  text-align: center;
  padding: 8px;
  margin-right: 10px;
`;
