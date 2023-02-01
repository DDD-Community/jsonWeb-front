import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, LoadingSpinner } from '@components/atom';
import Menu from '@components/blocks/Menu';
import NoData from '@components/blocks/NoData';
import { ButtonEnum, SORT_PARAM } from '@constants/common';
import { MenuListItemType } from '@src/types/common';
import { ReviewItem } from '@src/components/template/review';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import {
  useGetPopularEmotionById,
  useGetThemeReviewListWithInfinite,
} from '@hooks/queries/themes';
import {
  ReviewDetailBottomContainer,
  ReviewDetailBottomHeaderSection,
  ButtonContainer,
  ReviewDetailBottomListSection,
  ReviewHeaderContentsContainer,
  ReviewHeaderTitle,
  ReviewHeaderRate,
  ReviewHeaderSort,
} from './index.style';

interface Props {
  themeId: Readonly<number>;
}

export default function ReviewDetailBottom({ themeId }: Props) {
  const [sort, setSort] = useState(SORT_PARAM.DEFAULT);
  const navigate = useNavigate();

  const { data: emojiData } = useGetPopularEmotionById({ themeId });
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetThemeReviewListWithInfinite({ themeId, sort });

  const reviewData = useMemo(
    () => data?.pages.flatMap((page) => page.data.reviewList),
    [data?.pages]
  );

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  const ReviewMenuList: MenuListItemType[] = [
    { id: 0, name: '최신순', value: SORT_PARAM.DATE },
    { id: 1, name: '좋아요순', value: SORT_PARAM.LIKE },
  ];

  const goReviewEdit = () => {
    navigate(`/review/edit?themeId=${themeId}`);
  };

  const isNoReview = () => emojiData?.emotion === 'No Review';

  return (
    <ReviewDetailBottomContainer>
      <ReviewDetailBottomHeaderSection>
        <ButtonContainer>
          <Button
            buttonType={ButtonEnum.WHITE}
            height={40}
            onClick={goReviewEdit}
            text="리뷰 작성하기"
            disabled={false}
          />
        </ButtonContainer>
        <ReviewHeaderTitle>방탈출러의 리뷰</ReviewHeaderTitle>
        {!isNoReview() && (
          <ReviewHeaderContentsContainer>
            <ReviewHeaderRate>
              {emojiData?.percentage}% {emojiData?.emotion}
            </ReviewHeaderRate>
            <ReviewHeaderSort>
              <Menu list={ReviewMenuList} setSelectedOption={setSort} />
            </ReviewHeaderSort>
          </ReviewHeaderContentsContainer>
        )}
      </ReviewDetailBottomHeaderSection>
      <ReviewDetailBottomListSection>
        {isNoReview() ? (
          <NoData title="아직 리뷰가 없어요" des="첫 리뷰를 남겨주세요" />
        ) : (
          reviewData?.map((reviewItem) => (
            <ReviewItem key={reviewItem.reviewId} reviewItem={reviewItem} />
          ))
        )}
        {isFetchingNextPage ? (
          <LoadingSpinner isLoading isFixed={false} />
        ) : (
          <div ref={setTarget} />
        )}
      </ReviewDetailBottomListSection>
    </ReviewDetailBottomContainer>
  );
}
