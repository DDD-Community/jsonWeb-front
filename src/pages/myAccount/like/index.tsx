import { useState } from 'react';
// import { useMemo } from 'react';
// import { LoadingSpinner } from '@components/atom';
import { SideWrapper } from '@components/template/PageLayoutWrapper';
import CardList from '@components/blocks/Card/CardList';
// import { useGetMyLikeWithInfinite } from '@src/lib/hooks/queries/user';
// import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { CardListItemType } from '@src/types/types';
import { MyLikeContainer } from './style';

const dummyData: CardListItemType[] = [
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title1',
    description: 'address1',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title2',
    description: 'address2',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title3',
    description: 'address3',
    averageRating: 4.5,
    reviewCount: 100,
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title4',
    description: 'address4',
    averageRating: 4.5,
    reviewCount: 100,
  },
];

export default function MyLike() {
  const [cardList] = useState<CardListItemType[]>(dummyData);

  // const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
  //   useGetMyLikeWithInfinite({});

  // const likeData = useMemo(
  //   () => data?.pages.flatMap((page) => page.data.cafeList),
  //   [data?.pages]
  // );

  // const { setTarget } = useIntersectionObserver({
  //   onIntersect: ([{ isIntersecting }]) => {
  //     if (isIntersecting && hasNextPage) fetchNextPage();
  //   },
  // });

  return (
    <MyLikeContainer>
      <SideWrapper>
        <CardList list={[...cardList]} />
        {/* {isFetchingNextPage ? (
          <LoadingSpinner isLoading isFixed={false} />
        ) : (
          <div ref={setTarget} />
        )} */}
      </SideWrapper>
    </MyLikeContainer>
  );
}
