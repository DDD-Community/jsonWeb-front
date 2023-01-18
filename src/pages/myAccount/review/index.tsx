import { useMemo } from 'react';
import { LoadingSpinner } from '@components/atom';
import MyContentsHeader from '@src/components/blocks/MyHeader';
import ReviewItem from '@src/components/template/review/item';
import { useGetMyReviewWithInfinite } from '@src/lib/hooks/queries/user';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { MenuListItemType } from '@src/types/common';
import { NoContent, AltText } from '../style';
import { MyReviewContainer, ReviewFeed } from './style';

const MoreMenuList: MenuListItemType[] = [
  { id: 0, name: '리뷰 수정' },
  { id: 1, name: '리뷰 삭제' },
];

export default function MyReview() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetMyReviewWithInfinite({});

  const reviewData = useMemo(
    () => data?.pages.flatMap((page) => page.data.reviewList),
    [data?.pages]
  );
  const totalNumber = reviewData?.length;

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <MyReviewContainer>
      {totalNumber !== 0 ? (
        reviewData?.map((reviewItem) => (
          <ReviewFeed key={reviewItem.reviewId}>
            <MyContentsHeader
              target="review"
              targetId={reviewItem.reviewId}
              date={reviewItem.modifiedAt}
              more={MoreMenuList}
            />
            <ReviewItem reviewItem={reviewItem} />
          </ReviewFeed>
        ))
      ) : (
        <NoContent>
          <AltText>작성한 리뷰가 없습니다.</AltText>
        </NoContent>
      )}
      {isFetchingNextPage ? (
        <LoadingSpinner isLoading isFixed={false} />
      ) : (
        <div ref={setTarget} />
      )}
    </MyReviewContainer>
  );
}
