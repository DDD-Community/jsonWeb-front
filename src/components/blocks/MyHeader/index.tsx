import MoreBox from '@src/components/atom/MoreBox';
import { MenuListItemType } from '@src/types/common';
import { FeedHeader } from './style';

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
