import styled from '@emotion/styled';
import { Like } from '@src/assets/svg/icon';
import { useState } from 'react';
import { CustomTheme as theme } from '@styles/Theme';

interface Props {
  isLiked: boolean;
  count: number;
}

export default function LikeBtn({ isLiked, count }: Props) {
  const [active, setActive] = useState(isLiked);
  const [reviewCount, setReviewCount] = useState(count);

  const likeColor = () =>
    active ? theme.color.primary.purple : theme.color.grayscale.gray_300;

  const likeHandler = () => {
    setActive(!active);
    setReviewCount(active ? count : count + 1);
  };

  return (
    <LikeBtnWrapper onClick={likeHandler}>
      <Like fill={likeColor()} className="like--btn" />
      <ReviewLikeCount isLiked={active}>{reviewCount}</ReviewLikeCount>
    </LikeBtnWrapper>
  );
}

const LikeBtnWrapper = styled.button`
  cursor: pointer;

  &:hover {
    .like--btn {
      transform: scale(1.2);
    }
  }

  .like--btn {
    transition: all 0.2s ease-out;
  }
`;

const ReviewLikeCount = styled.p<{ isLiked: boolean }>`
  font-size: ${theme.font.size.s};
  color: ${(props) =>
    props.isLiked
      ? props.theme.color.primary.purple
      : theme.color.grayscale.gray_300};
`;
