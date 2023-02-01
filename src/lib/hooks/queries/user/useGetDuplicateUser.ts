import { useQuery } from '@tanstack/react-query';
import { get } from '@src/api/client';

export const USER_PROFILE_BY_ID_DUPLICATED_QUERY_KEY =
  'userProfileByIdDuplicated';

interface CurrentUserResponse extends Response {
  data: {
    isDuplicated: boolean;
  };
}

export const fetchCurrentUserByIdDuplicated = (
  nickname: string
): Promise<CurrentUserResponse> => get(`/users?nickname=${nickname}`);

export function useGetDuplicateUser({
  nickname,
}: {
  nickname: string | undefined;
}) {
  return useQuery([USER_PROFILE_BY_ID_DUPLICATED_QUERY_KEY], () =>
    fetchCurrentUserByIdDuplicated(nickname || '').then((res) => res.data)
  );
}
