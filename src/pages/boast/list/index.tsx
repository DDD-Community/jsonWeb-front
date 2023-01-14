import { useMemo, useState } from 'react';
import Menu from '@src/components/blocks/Menu';
import { LoadingSpinner } from '@components/atom';
import { MenuListItemType } from '@src/types/common';
import { useGetAllBoastsWithInfinite } from '@src/lib/hooks/queries/boast';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { SORT_PARAM } from '@src/constants/common';
import BoastItem from '@src/components/template/boast/item';
import { BoastContainer, BoastHeaderSection, BoastListTitle } from './style';

const BoastMenuList: MenuListItemType[] = [
  { id: 0, name: '최신순', value: SORT_PARAM.DATE },
  { id: 1, name: '인기순', value: SORT_PARAM.LIKE },
];

export default function List() {
  const [sort, setSort] = useState(SORT_PARAM.DEFAULT);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllBoastsWithInfinite({ sort });

  const boastData = useMemo(
    () => data?.pages.flatMap((page) => page.data.boastList),
    [data?.pages]
  );

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <BoastContainer>
      <BoastHeaderSection>
        <BoastListTitle>탈출 인증</BoastListTitle>
        <Menu list={BoastMenuList} setSelectedOption={setSort} />
      </BoastHeaderSection>
      {boastData?.map((boastItem) => (
        <BoastItem key={boastItem.boastId} boastItem={boastItem} />
      ))}
      {isFetchingNextPage ? (
        <LoadingSpinner isLoading isFixed={false} />
      ) : (
        <div ref={setTarget} />
      )}
    </BoastContainer>
  );
}
