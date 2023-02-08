import { useMutation } from '@tanstack/react-query';
import { put } from '@src/api/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@src/store/Toast';

interface UpdateUserMutationType {
  newNickname: string;
  newProfileImageUrl: string;
}

export const putUpdateUserMutation = async (body: UpdateUserMutationType) =>
  put(`/users/me`, body);

export function useUpdateUserMutation({
  body,
}: {
  body: UpdateUserMutationType;
}) {
  const navigate = useNavigate();
  const { fireToast } = useToast();
  return useMutation(() => putUpdateUserMutation(body), {
    onSuccess: () => {
      fireToast({ content: '프로필이 수정되었습니다.✨' });
      navigate('/my-account');
    },
    onError: () => {
      fireToast({ content: '프로필 등록이 실패했습니다.⛔️' });
    },
  });
}
