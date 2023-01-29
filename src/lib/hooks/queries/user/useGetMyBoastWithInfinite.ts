import { useInfiniteQuery } from 'react-query';
import { BoastListType } from '@src/types/boast';
import { Response } from '@src/types/types';
import { get } from '@src/api/client';

/**
 * @name infinite scroll 호출 단위
 * @description 현재 테스트를 위해 3개 해둠
 * @default {5}
 */
const MY_BOAST_LIST_ITEMS_SIZE = 3;

export const MY_BOAST_INFINITE_BY_ID_QUERY_KEY = 'myBoastListById';

interface MyBoastTypeResponse extends Response {
  data: BoastListType;
}

interface MyBoastParamInterface {
  page?: number;
  size?: number;
}

export const fetchMyBoastWithInfinite = async ({
  page = 0,
  size,
}: MyBoastParamInterface) => {
  const { data }: MyBoastTypeResponse = await get(
    `/users/me/boasts?page=${page}&size=${size}`
  );

  return { data, totalNumber: data.totalNumber, nextPage: page + 1 };
};

export function useGetMyBoastWithInfinite({
  page = 0,
  size = MY_BOAST_LIST_ITEMS_SIZE,
}: MyBoastParamInterface) {
  const query = useInfiniteQuery(
    [MY_BOAST_INFINITE_BY_ID_QUERY_KEY, page],
    ({ pageParam = 0 }) => fetchMyBoastWithInfinite({ page: pageParam, size }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.isLast) return undefined;
        return lastPage.nextPage ?? undefined;
      },
    }
  );

  return { ...query };
}
