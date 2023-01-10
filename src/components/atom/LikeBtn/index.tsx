import styled from '@emotion/styled';
import { Like } from '@src/assets/svg/icon';
import { CustomTheme as theme } from '@styles/Theme';

const POSITION_ENUM = {
  BOTTOM: 'bottom',
  RIGHT: 'right',
};

interface Props {
  isLiked: boolean;
  count: number;
  position?: string | undefined;
}

export default function LikeBtn({
  isLiked,
  count,
  position = POSITION_ENUM.BOTTOM,
}: Props) {
  const likeColor = () =>
    isLiked ? theme.color.primary.purple : theme.color.grayscale.gray_300;

  return (
    <LikeBtnWrapper position={position}>
      <Like fill={likeColor()} className="like--btn" />
      <ReviewLikeCount isLiked={isLiked}>{count}</ReviewLikeCount>
    </LikeBtnWrapper>
  );
}

const LikeBtnWrapper = styled.button<{ position: string }>`
  cursor: pointer;
  display: ${(props) =>
    props.position === POSITION_ENUM.RIGHT ? 'flex' : 'relative'};

  p {
    margin-top: ${(props) =>
      props.position === POSITION_ENUM.RIGHT ? '5px' : '0px'};
    margin-left: ${(props) =>
      props.position === POSITION_ENUM.RIGHT ? '4px' : '0px'};
  }

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
