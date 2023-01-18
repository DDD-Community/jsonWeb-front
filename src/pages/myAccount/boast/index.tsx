import { useMemo } from 'react';
import { LikeBtn, LoadingSpinner } from '@components/atom';
import Feed from '@src/components/blocks/Feed';
import MyContentsHeader from '@src/components/blocks/MyHeader';
import { useGetMyBoastWithInfinite } from '@src/lib/hooks/queries/user';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { MenuListItemType } from '@src/types/common';
import { NoContent, AltText } from '../style';
import {
  MyBoastContainer,
  BoastFeed,
  FeedContents,
  ThemeTitle,
  TextHighlight,
  LikeBtnBox,
} from './style';

const MoreMenuList: MenuListItemType[] = [
  { id: 0, name: '인증 수정' },
  { id: 1, name: '인증 삭제' },
];

export default function MyBoast() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetMyBoastWithInfinite({});

  const boastData = useMemo(
    () => data?.pages.flatMap((page) => page.data.boastList),
    [data?.pages]
  );
  const totalNumber = boastData?.length;

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <MyBoastContainer>
      {totalNumber !== 0 ? (
        boastData?.map((boastItem) => (
          <BoastFeed key={boastItem.boastId}>
            <MyContentsHeader
              target="boast"
              targetId={boastItem.boastId}
              date={boastItem.modifiedAt}
              more={MoreMenuList}
            />
            <FeedContents>
              <ThemeTitle>
                <TextHighlight>{boastItem.cafeName}</TextHighlight>
                &nbsp;|&nbsp;
                <TextHighlight color="green">
                  {boastItem.themeName}
                </TextHighlight>
              </ThemeTitle>
              <Feed key={boastItem.boastId} boastItem={boastItem} />
              <LikeBtnBox>
                <LikeBtn
                  isLiked={boastItem.isLiked}
                  count={boastItem.likeCount}
                  position="right"
                />
              </LikeBtnBox>
            </FeedContents>
          </BoastFeed>
        ))
      ) : (
        <NoContent>
          <AltText>작성한 인증이 없습니다.</AltText>
        </NoContent>
      )}
      {isFetchingNextPage ? (
        <LoadingSpinner isLoading isFixed={false} />
      ) : (
        <div ref={setTarget} />
      )}
    </MyBoastContainer>
  );
}
