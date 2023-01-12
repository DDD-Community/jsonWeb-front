import { useState } from 'react';
import SelectBox from '@components/blocks/SelectBox';
import Chips from '@components/blocks/Chips';
import Star from '@components/blocks/Star';
import TextArea from '@components/blocks/TextArea';
import { ReviewThemeType } from '@src/types/review';
import { useReviewCreateMutation } from '@hooks/queries/review';
import { useGetThemesById } from '@hooks/queries/themes';
import { THEME_NOT_EXIST, RATE } from '@src/constants';
import {
  DEFAULT_ARIA_THEME_EVALUATION,
  DEFAULT_ARIA_THEME_LABEL,
} from '@src/constants/aria-label';
import { evaluationData } from '@src/lib/data/evaluationData';
import { parsingSliceLastEmojiString } from '@src/lib/util/string';
import { useQueryString } from '@hooks/useQueryString';
import {
  ReviewSection,
  ChipsSection,
  ReviewTitle,
  ReviewCheckSection,
  StarContainer,
  ReviewSubmit,
} from './index.style';

export default function Edit() {
  /**
   * @name {cafe, theme 접근 } 분기 필요
   * @todo 일단 해놓고 고민 좀 해보겠습니다
   */
  const themeId = Number(useQueryString('themeId'));
  const { data: themeData } = useGetThemesById({ themeId });

  const data: ReviewThemeType[] = [
    {
      cafeId: 1,
      themeId,
      title: themeData?.name || THEME_NOT_EXIST,
    },
  ];

  const [themeSelectedOption, setThemeSelectedOption] = useState(
    data[0].title || THEME_NOT_EXIST
  );
  const [evaluationSelectedOption, setEvaluationSelectedOption] = useState([
    evaluationData[0],
  ]);
  const [rateOption1, setRateOption1] = useState(0);
  const [rateOption2, setRateOption2] = useState(0);
  const [contents, setContents] = useState('');

  const { mutate: submitMutate } = useReviewCreateMutation({
    themeId,
    body: {
      content: contents,
      difficulty: rateOption2,
      emotionFirst: parsingSliceLastEmojiString(
        evaluationSelectedOption[0]?.title
      ),
      emotionSecond:
        parsingSliceLastEmojiString(evaluationSelectedOption[1]?.title) || '',
      star: rateOption1,
    },
  });

  const reviewSubmit = () => submitMutate();

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
          canSelectNum={2}
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
