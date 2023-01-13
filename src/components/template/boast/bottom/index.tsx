import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, LoadingSpinner } from '@components/atom';
import Menu from '@components/blocks/Menu';
import { useGetThemeBoastListWithInfinite } from '@src/lib/hooks/queries/themes/useGetThemeBoastListWithInfinite';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { ButtonEnum, SORT_PARAM } from '@constants/common';
import { MenuListItemType } from '@src/types/common';
import BoastItem from '../item';
import {
  BoastDetailBottomContainer,
  BoastDetailBottomHeaderSection,
  BoastDetailBottomListSection,
  BoastHeaderContentsContainer,
  BoastHeaderRate,
  BoastHeaderSort,
  BoastHeaderTitle,
  ButtonContainer,
} from './style';

interface Props {
  themeId: Readonly<number>;
}

export default function BoastDetailBottom({ themeId }: Props) {
  const [sort, setSort] = useState(SORT_PARAM.DEFAULT);
  const navigate = useNavigate();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetThemeBoastListWithInfinite({ themeId, sort });

  const boastData = useMemo(
    () => data?.pages.flatMap((page) => page.data.boastList),
    [data?.pages]
  );

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  const goBoastEdit = () => {
    navigate(`/boast/edit?themeId=${themeId}`);
  };

  const BoastMenuList: MenuListItemType[] = [
    { id: 0, name: '최신순', value: SORT_PARAM.DATE },
    { id: 1, name: '좋아요순', value: SORT_PARAM.LIKE },
  ];

  return (
    <BoastDetailBottomContainer>
      <BoastDetailBottomHeaderSection>
        <ButtonContainer>
          <Button
            buttonType={ButtonEnum.WHITE}
            height={40}
            onClick={goBoastEdit}
            text="인증 올리기"
            disabled={false}
          />
        </ButtonContainer>
        <BoastHeaderTitle>탈출 고수들의 인증</BoastHeaderTitle>
        <BoastHeaderContentsContainer>
          <BoastHeaderRate>
            {boastData?.length}명의 탈출 고수가 있네요
          </BoastHeaderRate>
          <BoastHeaderSort>
            <Menu list={BoastMenuList} setSelectedOption={setSort} />
          </BoastHeaderSort>
        </BoastHeaderContentsContainer>
      </BoastDetailBottomHeaderSection>
      <BoastDetailBottomListSection>
        {boastData?.map((boastItem) => (
          <BoastItem key={boastItem.boastId} boastItem={boastItem} />
        ))}
        {isFetchingNextPage ? (
          <LoadingSpinner isLoading isFixed={false} />
        ) : (
          <div ref={setTarget} />
        )}
      </BoastDetailBottomListSection>
    </BoastDetailBottomContainer>
  );
}
