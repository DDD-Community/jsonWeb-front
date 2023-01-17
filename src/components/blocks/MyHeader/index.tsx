import styled from '@emotion/styled';
import MoreBox from '@src/components/atom/MoreBox';
import { MenuListItemType } from '@src/types/common';

type MyHeaderType = {
  target: 'boast' | 'review';
  targetId: number;
  date: string;
  more: MenuListItemType[];
};

export default function MyContentsHeader({
  target,
  targetId,
  date,
  more,
}: MyHeaderType) {
  return (
    <FeedHeader>
      <p>{date}</p>
      <MoreBox list={more} target={target} targetId={targetId} />
    </FeedHeader>
  );
}

const FeedHeader = styled.div`
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
