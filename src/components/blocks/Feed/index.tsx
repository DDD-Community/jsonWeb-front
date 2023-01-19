import { BoastType } from '@src/types/boast';
import { FeedWrapper, FeedImage, Hashtag, HashtagWrapper } from './style';

export default function Feed({ boastItem }: { boastItem: BoastType }) {
  return (
    <FeedWrapper>
      <FeedImage url={boastItem.boastImage} />
      <HashtagWrapper>
        {boastItem.hashtags.map((tag) => (
          <Hashtag>{tag}</Hashtag>
        ))}
      </HashtagWrapper>
    </FeedWrapper>
  );
}
