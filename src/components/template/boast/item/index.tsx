import Feed from '@src/components/blocks/Feed';
import UserInfo from '@src/components/blocks/UserInfo';
import { useBoastLikeMutation } from '@src/lib/hooks/queries/boast';
import { BoastType } from '@src/types/boast';
import { FeedSection } from './style';

export default function BoastItem({ boastItem }: { boastItem: BoastType }) {
  const { mutate: handleLikeMutate } = useBoastLikeMutation({
    boastId: boastItem.boastId,
  });

  return (
    <FeedSection>
      <UserInfo userInfo={boastItem} likeMutate={handleLikeMutate} />
      <Feed
        key={boastItem.boastId}
        image={boastItem.boastImage}
        hashtags={boastItem.hashtags}
      />
    </FeedSection>
  );
}
