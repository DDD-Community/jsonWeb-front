import Feed from '@src/components/blocks/Feed';
import UserInfo from '@src/components/blocks/UserInfo';
import { BoastType } from '@src/types/boast';
import { FeedSection } from './style';

export default function BoastItem({ boastItem }: { boastItem: BoastType }) {
  return (
    <FeedSection>
      <UserInfo userInfo={boastItem} />
      <Feed image={boastItem.boastImage} hashtags={boastItem.hashtags} />
    </FeedSection>
  );
}
