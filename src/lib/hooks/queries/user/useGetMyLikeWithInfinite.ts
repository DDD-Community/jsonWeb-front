import { useInfiniteQuery } from 'react-query';
import { Response } from '@src/types/types';
import { get } from '@src/api/client';
import { CafeListType } from '@src/types/cafe';

/**
 * @name infinite scroll 호출 단위
 * @description 현재 테스트를 위해 6개 해둠
 * @default {5}
 */
const MY_LIKE_LIST_ITEMS_SIZE = 6;

export const MY_LIKE_INFINITE_BY_ID_QUERY_KEY = 'myLikeListById';

interface MyLikeTypeResponse extends Response {
  data: CafeListType;
}

interface MyLikeParamInterface {
  page?: number;
  size?: number;
}

export const fetchMyLikeWithInfinite = async ({
  page = 0,
  size,
}: MyLikeParamInterface) => {
  const { data }: MyLikeTypeResponse = await get(
    `/users/me/cafes?page=${page}&size=${size}`
  );

  return { data, nextPage: page + 1 };
};

export function useGetMyLikeWithInfinite({
  page = 0,
  size = MY_LIKE_LIST_ITEMS_SIZE,
}: MyLikeParamInterface) {
  const query = useInfiniteQuery(
    [MY_LIKE_INFINITE_BY_ID_QUERY_KEY, page],
    ({ pageParam = 0 }) => fetchMyLikeWithInfinite({ page: pageParam, size }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.isLast) return undefined;
        return lastPage.nextPage ?? undefined;
      },
    }
  );

  return { ...query };
}
