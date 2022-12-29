import { Button } from '@components/atom';
import { ButtonEnum } from '@constants/common';
import { useNavigate } from 'react-router-dom';
import { ReviewListType } from '@src/types/review';
import { ReviewItem } from '@src/components/template/review';
import {
  ReviewDetailBottomContainer,
  ReviewDetailBottomHeaderSection,
  ButtonContainer,
  ReviewDetailBottomListSection,
} from './index.style';

interface Props {
  themeId: Readonly<number | undefined>;
}

export default function ReviewDetailBottom({ themeId }: Props) {
  const navigate = useNavigate();
  /**
   * @todo themeId query string 전달
   * */
  const goReviewEdit = () => {
    navigate(`/review/edit?themeId=${themeId}`);
  };

  const data: ReviewListType = {
    isLast: true,
    reviewList: [
      {
        content: `친구들과 갔는데 테마 자체는 신선해요. 
          카페 분위기나 환경은 좀 더 쾌적했으면 좋겠어요... 넘 답답하고 덥더라구요. 그리고 공포테마이긴하지만 너무 어두우니깐
          진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝 그리고 공포테마이긴하지만 너무 어두우니깐
          진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝`,
        difficulty: 5,
        emotionFirst: '재미있어요',
        emotionSecond: '무서워요',
        isLiked: false,
        likeCount: 23,
        modifiedAt: '2023.01.01',
        reviewId: 1,
        star: 3,
        themeGenre: ['공포'],
        themeName: '인형괴담',
        writerNickname: '아이코',
      },
      {
        content: `친구들과 갔는데 테마 자체는 신선해요. 
          카페 분위기나 환경은 좀 더 쾌적했으면 좋겠어요... 넘 답답하고 덥더라구요. 그리고 공포테마이긴하지만 너무 어두우니깐
          진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝 그리고 공포테마이긴하지만 너무 어두우니깐
          진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝`,
        difficulty: 1,
        emotionFirst: '재미있어요',
        emotionSecond: '무서워요',
        isLiked: true,
        likeCount: 23,
        modifiedAt: '2023.02.01',
        reviewId: 2,
        star: 4,
        themeGenre: ['미스터리', '공포'],
        themeName: '인형괴담',
        writerNickname: '최푸름',
      },
    ],
    totalNumber: 2,
  };

  return (
    <ReviewDetailBottomContainer>
      <ReviewDetailBottomHeaderSection>
        <ButtonContainer>
          <Button
            buttonType={ButtonEnum.WHITE}
            height={40}
            onClick={goReviewEdit}
            text="리뷰 작성하기"
            disabled={false}
          />
        </ButtonContainer>
      </ReviewDetailBottomHeaderSection>
      <ReviewDetailBottomListSection>
        {data?.reviewList.map((reviewItem) => (
          <ReviewItem key={reviewItem.reviewId} reviewItem={reviewItem} />
        ))}
      </ReviewDetailBottomListSection>
    </ReviewDetailBottomContainer>
  );
}
