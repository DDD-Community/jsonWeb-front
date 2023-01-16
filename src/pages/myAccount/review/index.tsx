import MyContentsHeader from '@src/components/blocks/MyHeader';
import ReviewItem from '@src/components/template/review/item';
import { MenuListItemType } from '@src/types/common';
import { ReviewListType } from '@src/types/review';
import { MyReviewContainer, ReviewFeed } from './style';

const dummyData: ReviewListType = {
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
      writerLevel: '초보',
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
      writerLevel: '초보',
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
      writerLevel: '고수',
    },
  ],
  totalNumber: 2,
};

const MoreMenuList: MenuListItemType[] = [
  { id: 0, name: '리뷰 수정' },
  { id: 1, name: '리뷰 삭제' },
];

export default function MyReview() {
  return (
    <MyReviewContainer>
      {dummyData.reviewList.map((el) => (
        <ReviewFeed key={el.reviewId}>
          <MyContentsHeader
            target="review"
            targetId={el.reviewId}
            date={el.modifiedAt}
            more={MoreMenuList}
          />
          <ReviewItem reviewItem={el} />
        </ReviewFeed>
      ))}
    </MyReviewContainer>
  );
}
