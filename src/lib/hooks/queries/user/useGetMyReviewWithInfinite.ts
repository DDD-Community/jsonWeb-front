import { useInfiniteQuery } from '@tanstack/react-query';
import { ReviewListType } from '@src/types/review';
import { Response } from '@src/types/types';
import { get } from '@src/api/client';

/**
 * @name infinite scroll 호출 단위
 * @description 현재 테스트를 위해 3개 해둠
 * @default {5}
 */
const MY_REVIEW_LIST_ITEMS_SIZE = 3;

export const MY_REVIEW_INFINITE_BY_ID_QUERY_KEY = 'myReviewListById';

interface MyReviewTypeResponse extends Response {
  data: ReviewListType;
}

interface MyReviewParamInterface {
  page?: number;
  size?: number;
}

export const fetchMyReviewWithInfinite = async ({
  page = 0,
  size,
}: MyReviewParamInterface) => {
  const { data }: MyReviewTypeResponse = await get(
    `/users/me/reviews?page=${page}&size=${size}`
  );

  return { data, nextPage: page + 1 };
};

export function useGetMyReviewWithInfinite({
  page = 0,
  size = MY_REVIEW_LIST_ITEMS_SIZE,
}: MyReviewParamInterface) {
  const query = useInfiniteQuery(
    [MY_REVIEW_INFINITE_BY_ID_QUERY_KEY, page],
    ({ pageParam = 0 }) => fetchMyReviewWithInfinite({ page: pageParam, size }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.isLast) return undefined;
        return lastPage.nextPage ?? undefined;
      },
    }
  );

  return { ...query };
}
