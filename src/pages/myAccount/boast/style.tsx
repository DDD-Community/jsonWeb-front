import styled from '@emotion/styled';

export const MyBoastContainer = styled.section`
  width: 100%;
  overflow-y: scroll;
`;

export const BoastFeed = styled.section``;

export const FeedContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const ThemeTitle = styled.h1`
  width: 100%;
  text-align: left;
  padding: 10px 10px 5px 10px;
  color: ${({ theme }) => `${theme.color.grayscale.gray_600}`};
`;

export const TextHighlight = styled.span<{ color?: string }>`
  color: ${(props) =>
    props.color === 'green'
      ? props.theme.color.primary.green
      : props.theme.color.grayscale.gray_000};
`;

export const LikeBtnBox = styled.div`
  width: 100%;
  padding: 15px 10px 10px 10px;
`;
