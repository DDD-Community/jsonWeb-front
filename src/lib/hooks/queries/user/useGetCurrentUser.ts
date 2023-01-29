import { useQuery } from 'react-query';
import { get } from '@src/api/client';
import { UserProfileType } from '@src/types/user';

export const USER_PROFILE_BY_ID_QUERY_KEY = 'userProfileById';

interface CurrentUserResponse extends Response {
  data: UserProfileType;
}

export const fetchCurrentUserById = (): Promise<CurrentUserResponse> =>
  get(`/users/me`);

export function useGetCurrentUser() {
  if (localStorage.getItem('EXIT_LOGIN_TOKEN')) {
    const { data } = useQuery([USER_PROFILE_BY_ID_QUERY_KEY], () =>
      fetchCurrentUserById().then((res) => res.data)
    );
    return data;
  }
  return undefined;
}
