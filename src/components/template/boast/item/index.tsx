import styled from '@emotion/styled';
import Feed from '@src/components/blocks/Feed';
import UserInfo from '@src/components/blocks/UserInfo';
import { useBoastLikeMutation } from '@src/lib/hooks/queries/boast';
import { BoastType } from '@src/types/boast';

export default function BoastItem({ boastItem }: { boastItem: BoastType }) {
  const { mutate: handleLikeMutate } = useBoastLikeMutation({
    boastId: boastItem.boastId,
  });

  return (
    <FeedSection>
      <UserInfo userInfo={boastItem} likeMutate={handleLikeMutate} />
      <Feed key={boastItem.boastId} boastItem={boastItem} />
    </FeedSection>
  );
}

const FeedSection = styled.section`
  width: 100%;
  position: relative;
  padding: 24px 0;
  border-bottom: ${({ theme }) =>
    `8px solid ${theme.color.grayscale.gray_600}`};
  :last-of-type {
    border-bottom: 0;
  }
`;
