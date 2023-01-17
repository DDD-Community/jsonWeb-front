import styled from '@emotion/styled';

export const FeedWrapper = styled.section`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedImage = styled.div<{ url: string }>`
  width: 327px;
  height: 327px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
  background-image: url('${(props) => props.url}');
  background-color: ${({ theme }) => theme.color.grayscale.gray_400};
  background-size: cover;
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
