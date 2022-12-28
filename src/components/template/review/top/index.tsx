import { ReviewThemeDetailType } from '@src/types/review';
import sample from '@src/assets/sample.png';
import {
  ReviewDetailTopContainer,
  ReviewDetailThumbnail,
  ReviewDetailContentsContainer,
  ReviewDetailTitle,
  ReviewDetailGenreSection,
  ReviewDetailGenreItem,
} from './index.style';

interface Props {
  themeId: Readonly<number | undefined>;
}

export default function ReviewDetailTop({ themeId }: Props) {
  const data: ReviewThemeDetailType = {
    ageLimit: '청소년 이용불가',
    avgStar: 4.93,
    description: `친구들과 술한잔 걸치고 집으로 돌아가던 어느 날,
                  우연히 투신 자살을 목격하게 된다.호기심에 끌려 투신의 현장을 기웃거리다 인기척이 들려 뒤를 돌아보니 귀여운 여자아이가 울고 있다.
                  아끼는 인형을 잃어버렸다며 인형을 찾아달라고 떼를 쓰는 아이..아이가 너무 예쁘기도 하다. 요녀석!! `,
    difficulty: 5,
    genreList: [
      {
        genreId: 1,
        genreName: '공포',
      },
      {
        genreId: 2,
        genreName: '미스터리',
      },
    ],
    imageUrl: sample,
    maxPlayerCount: 6,
    minPlayerCount: 2,
    name: '인형괴담',
    reviewCount: 23,
    themeId,
    time: 60,
  };
  return (
    <ReviewDetailTopContainer>
      <ReviewDetailThumbnail src={data.imageUrl} height={200} />
      <ReviewDetailContentsContainer>
        <ReviewDetailTitle>{data.name}</ReviewDetailTitle>
        <ReviewDetailGenreSection>
          {data.genreList.map((genre) => (
            <ReviewDetailGenreItem key={genre.genreId}>
              {genre.genreName}
            </ReviewDetailGenreItem>
          ))}
        </ReviewDetailGenreSection>
      </ReviewDetailContentsContainer>
    </ReviewDetailTopContainer>
  );
}
