import { Button } from '@components/atom';
import Menu from '@components/blocks/Menu';
import { ButtonEnum } from '@constants/common';
import { useNavigate } from 'react-router-dom';
import { MenuListItemType } from '@src/types/common';
import { ReviewListType, PopularType } from '@src/types/review';
import { ReviewItem } from '@src/components/template/review';
import {
  ReviewDetailBottomContainer,
  ReviewDetailBottomHeaderSection,
  ButtonContainer,
  ReviewDetailBottomListSection,
  ReviewHeaderContentsContainer,
  ReviewHeaderTitle,
  ReviewHeaderRate,
  ReviewHeaderSort,
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
        emotionFirst: '재미있어요😉',
        emotionSecond: '무서워요😨',
        isLiked: false,
        likeCount: 23,
        modifiedAt: '2023.01.01',
        reviewId: 1,
        star: 3,
        genre: ['공포'],
        themeName: '아이코',
        writerNickname: '프로 불편러',
        writerProfileImage: 'https://picsum.photos/200',
        writerBadge: '초보',
      },
      {
        content: `친구들과 갔는데 테마 자체는 신선해요. 
          카페 분위기나 환경은 좀 더 쾌적했으면 좋겠어요... 넘 답답하고 덥더라구요. 그리고 공포테마이긴하지만 너무 어두우니깐
          진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝 그리고 공포테마이긴하지만 너무 어두우니깐
          진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝`,
        difficulty: 1,
        emotionFirst: '재미있어요😉',
        emotionSecond: '무서워요😨',
        isLiked: false,
        likeCount: 223,
        modifiedAt: '2023.02.01',
        reviewId: 2,
        star: 4,
        genre: ['미스터리', '공포'],
        themeName: '아이코',
        writerNickname: '최푸름',
        writerProfileImage: 'https://picsum.photos/200',
        writerBadge: '초보',
      },
      {
        content: `친구들과 갔는데 테마 자체는 신선해요. 
                카페 분위기나 환경은 좀 더 쾌적했으면 좋겠어요... 넘 답답하고 덥더라구요. 그리고 공포테마이긴하지만 너무 어두우니깐
                진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝 그리고 공포테마이긴하지만 너무 어두우니깐
                진짜 잘 안보여서 즐기기가 어려운? 테마는 신선하고 재밌지만 불편하네요오 왝왝`,
        difficulty: 3,
        emotionFirst: '재미있어요😉',
        emotionSecond: '무서워요😨',
        isLiked: false,
        likeCount: 10,
        modifiedAt: '2026.12.01',
        reviewId: 2,
        star: 2,
        genre: ['미스터리'],
        themeName: '아이코',
        writerNickname: '준모민정',
        writerProfileImage: 'https://picsum.photos/200',
        writerBadge: '고수',
      },
    ],
    totalNumber: 2,
  };

  const emojiData: PopularType = {
    emotion: '재밌어했어요😉',
    percentage: 96,
  };

  const ReviewMenuList: MenuListItemType[] = [
    { id: 0, name: '최신순' },
    { id: 1, name: '좋아요순' },
  ];

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
        <ReviewHeaderTitle>방탈출러의 리뷰</ReviewHeaderTitle>
        <ReviewHeaderContentsContainer>
          <ReviewHeaderRate>
            {emojiData.percentage}% {emojiData.emotion}
          </ReviewHeaderRate>
          <ReviewHeaderSort>
            <Menu list={ReviewMenuList} />
          </ReviewHeaderSort>
        </ReviewHeaderContentsContainer>
      </ReviewDetailBottomHeaderSection>
      <ReviewDetailBottomListSection>
        {data?.reviewList.map((reviewItem) => (
          <ReviewItem key={reviewItem.reviewId} reviewItem={reviewItem} />
        ))}
      </ReviewDetailBottomListSection>
    </ReviewDetailBottomContainer>
  );
}
