import { useMutation } from '@tanstack/react-query';
import { post } from '@src/api/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@src/store/Toast';
import { ReportType } from '@src/types/types';

const REPORT_KIND = {
  REVIEW: 'reviews',
  BOAST: 'boasts',
};

interface DynamicReportType extends ReportType {
  [key: string]: string | null | number;
}

const typeAdapter =
  (body: DynamicReportType): Function =>
  (type: string) =>
    Object.prototype.hasOwnProperty.call(body, type);

const parseApi = (adapter: Function) => {
  if (adapter('reviewId')) return REPORT_KIND.REVIEW;
  if (adapter('boastId')) return REPORT_KIND.BOAST;
  return '';
};

export const postReportMutation = async (body: DynamicReportType) => {
  post(`/${parseApi(typeAdapter(body))}/reports`, body);
};

export function useReportMutation({ body }: { body: DynamicReportType }) {
  const navigate = useNavigate();
  const { fireToast } = useToast();
  return useMutation(() => postReportMutation(body), {
    onSuccess: () => {
      fireToast({ content: '회원님의 신고가 접수되었어요.✨' });
      navigate(-1);
    },
    onError: () => {
      fireToast({ content: '신고 접수가 실패했어요.⛔️' });
    },
  });
}
