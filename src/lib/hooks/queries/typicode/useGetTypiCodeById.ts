import { useQuery } from '@tanstack/react-query';
import { TypiCodeInterface } from '@src/types/typicode/typicode';

import { get } from '@src/api/client';

/**
 * @name [스켈레톤] @typicode : query single feching
 * @description fecing 이외에 mutation, infinite feching은 다음을 참고
 * @url https://react-query-v3.tanstack.com/overview
 */
export const TYPICODE_BY_ID_QUERY_KEY = 'typiCodeById';

export const fetchTypiCodeById = (
  id: string | undefined
): Promise<TypiCodeInterface> => get(`/todos/${id}`);

export function useGetTypiCodeById({
  typiCodeId,
}: {
  typiCodeId: string | undefined;
}) {
  const { data: typicode, isLoading } = useQuery(
    [TYPICODE_BY_ID_QUERY_KEY, typiCodeId],
    () => fetchTypiCodeById(typiCodeId).then((res) => res),
    { enabled: Boolean(typiCodeId) }
  );

  return { typicode, isLoading };
}
