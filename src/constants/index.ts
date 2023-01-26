export const THEME_NOT_EXIST = '현재 테마가 존재하지 않습니다.';
export const PLACEHOLDER_TEXT =
  '자세하고 솔직한 리뷰는 다른 사용자에게 큰 도움이 됩니다. (최소 10자 이상)';
export const REPORT_PLACEHOLDER_TEXT =
  '비방, 욕설, 광고, 잘못된 정보 등 신고 사유를 구체적으로 작성해주세요';
export const MAX_LENGTH_CONTENT = 240;
export const RATE = {
  STAR: 'STAR',
  LOCK: 'LOCK',
};
export const MAX_LENGTH_TAG = 5;
export const MAX_COUNT_TAG = 3;

export const reportSchema = [
  {
    label: '관련 없는 내용이에요',
    name: '관련 없는 내용이에요',
  },
  {
    label: '광고 / 홍보성 게시글이에요',
    name: '광고 / 홍보성 게시글이에요',
  },
  {
    label: '선정적이거나 폭력,혐오적인 내용이에요',
    name: '선정적이거나 폭력,혐오적인 내용이에요',
  },
  {
    label: '무단 도용,사칭저작권 침해가 의심되어요',
    name: '무단 도용,사칭저작권 침해가 의심되어요',
  },
  {
    label: '개인 정보 노출이 우려되어요',
    name: '개인 정보 노출이 우려되어요',
  },
  {
    label: '기타 사유',
    name: '기타 사유',
  },
];
