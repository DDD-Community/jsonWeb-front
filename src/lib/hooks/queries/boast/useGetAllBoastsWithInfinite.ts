import { useInfiniteQuery } from '@tanstack/react-query';
import { BoastListType } from '@src/types/boast';
import { Response } from '@src/types/types';
import { get } from '@src/api/client';
import { SORT_PARAM } from '@constants/common';

/**
 * @name infinite scroll 호출 단위
 * @description 현재 테스트를 위해 3개 해둠
 * @default {5}
 */
const BOAST_PAGE_ITEMS_SIZE = 3;

export const ALL_BOASTS_INFINITE_QUERY_KEY = 'allBoasts';

interface AllBoastsTypeResponse extends Response {
  data: BoastListType;
}

interface AllBoastsParamInterface {
  sort: string;
  page?: number;
  size?: number;
}

export const fetchAllBoastsWithInfinite = async ({
  page = 0,
  sort,
  size,
}: AllBoastsParamInterface) => {
  const { data }: AllBoastsTypeResponse = await get(
    `/boasts?sort=${sort}&page=${page}&size=${size}`
  );

  return {
    data,
    nextPage: page + 1,
  };
};

export function useGetAllBoastsWithInfinite({
  sort = SORT_PARAM.DEFAULT,
  page = 0,
  size = BOAST_PAGE_ITEMS_SIZE,
}: AllBoastsParamInterface) {
  const query = useInfiniteQuery(
    [ALL_BOASTS_INFINITE_QUERY_KEY, sort, page],
    ({ pageParam = 0 }) =>
      fetchAllBoastsWithInfinite({
        page: pageParam,
        sort,
        size,
      }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.isLast) return undefined;
        return lastPage.nextPage ?? undefined;
      },
    }
  );

  return { ...query };
}
