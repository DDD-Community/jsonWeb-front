import { useState, useCallback } from 'react';
import SelectBox from '@components/blocks/SelectBox';
import Chips from '@components/blocks/Chips';
import Star from '@components/blocks/Star';
import TextArea from '@components/blocks/TextArea';
import { ReviewThemeType } from '@src/types/review';
import { useReviewCreateMutation } from '@hooks/queries/review';
import { THEME_NOT_EXIST, RATE } from '@src/constants';
import {
  DEFAULT_ARIA_THEME_EVALUATION,
  DEFAULT_ARIA_THEME_LABEL,
} from '@src/constants/aria-label';
import { evaluationData } from '@src/lib/data/evaluationData';
import { useQueryString } from '@hooks/useQueryString';
import {
  ReviewSection,
  ChipsSection,
  ReviewTitle,
  ReviewCheckSection,
  StarContainer,
  ReviewSubmit,
} from './index.style';

const data: ReviewThemeType[] = [
  {
    cafeId: 1,
    themeId: 1,
    title: `숨겨진 협곡`,
    description: 'test',
  },
  {
    cafeId: 1,
    themeId: 2,
    title: `비밀의 숲`,
    description: 'test',
  },
  {
    cafeId: 1,
    themeId: 3,
    title: `인형 아이`,
    description: 'test',
  },
  {
    cafeId: 1,
    themeId: 4,
    title: `기억의 조각`,
    description: 'test',
  },
];

export default function Edit() {
  const themeId = Number(useQueryString('themeId'));

  const [themeSelectedOption, setThemeSelectedOption] = useState(
    data[0].title || THEME_NOT_EXIST
  );
  const [evaluationSelectedOption, setEvaluationSelectedOption] = useState(
    evaluationData[0]
  );
  const [rateOption1, setRateOption1] = useState(0);
  const [rateOption2, setRateOption2] = useState(0);
  const [contents, setContents] = useState('');

  const { mutate: submitMutate } = useReviewCreateMutation({
    themeId,
    body: {
      content: contents,
      difficulty: rateOption2,
      emotionFirst: evaluationSelectedOption.title,
      emotionSecond: '',
      star: rateOption1,
    },
  });

  const reviewSubmit = useCallback(() => {
    submitMutate();
  }, [submitMutate]);

  const handelDisabled = () => {
    if (themeId) return true;
    return false;
  };

  return (
    <ReviewSection className="review">
      <SelectBox
        options={data}
        selectedOption={themeSelectedOption}
        setSelectedOption={setThemeSelectedOption}
        width={160}
        maxHeight={44}
        name={DEFAULT_ARIA_THEME_LABEL}
        disabled={handelDisabled()}
      />
      <ChipsSection>
        <Chips
          options={evaluationData}
          selectedOption={evaluationSelectedOption}
          setSelectedOption={setEvaluationSelectedOption}
          name={DEFAULT_ARIA_THEME_EVALUATION}
          height={33}
        />
      </ChipsSection>
      <ReviewCheckSection className="review--form">
        <ReviewTitle>테마는 만족하셨나요?</ReviewTitle>
        <StarContainer>
          <Star type={RATE.STAR} setRateOption={setRateOption1} />
        </StarContainer>
        <ReviewTitle>실제 난이도는 어떻게 느껴지셨나요?</ReviewTitle>
        <StarContainer>
          <Star type={RATE.LOCK} setRateOption={setRateOption2} />
        </StarContainer>
        <ReviewTitle>리뷰를 작성해주세요</ReviewTitle>
        <TextArea content={contents} setContent={setContents} />
        <ReviewSubmit
          type="submit"
          onClick={reviewSubmit}
          className="review--form__submit"
        >
          리뷰 등록하기
        </ReviewSubmit>
      </ReviewCheckSection>
    </ReviewSection>
  );
}
