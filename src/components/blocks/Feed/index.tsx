import { FeedContentsType } from '@src/types/boast';
import { FeedWrapper, FeedImage, Hashtag, HashtagWrapper } from './style';

export default function Feed({ image, hashtags }: FeedContentsType) {
  return (
    <FeedWrapper>
      <FeedImage>
        <img alt="Feed" src={image} />
      </FeedImage>
      <HashtagWrapper>
        {hashtags.map((tag) => (
          <Hashtag>{tag}</Hashtag>
        ))}
      </HashtagWrapper>
    </FeedWrapper>
  );
}
