import { useMemo, useRef, useState, useLayoutEffect } from 'react';
import { ReviewThemeDetailType } from '@src/types/review';
import sample from '@src/assets/sample.png';
import { Star, LockRateSmall } from '@src/assets/svg/icon';
import BoldTextSpan from '@components/atom/BoldTextSpan';
import { CustomTheme as theme } from '@src/styles/Theme';
import { generateUUID } from '@src/lib/util';

import {
  ReviewDetailTopContainer,
  ReviewDetailThumbnail,
  ReviewDetailContentsContainer,
  ReviewDetailTitle,
  ReviewDetailGenreSection,
  ReviewDetailGenreItem,
  ReviewDetailRateSection,
  ReviewDetailRate,
  ReviewCountText,
  ReviewDetailInfoBoxSection,
  ReviewDetailInfoBox,
  ReviewDetailInfoTitle,
  ReviewDetailInfoParagraph,
  ReviewDetailDescriptionSection,
  DescriptionTitle,
  DescriptionContents,
  DescriptionMoreBtn,
} from './index.style';

interface Props {
  themeId: Readonly<number | undefined>;
}

const InfoBoxModelType = ['people', 'difficulty', 'time'];

const reviewInfoEnum = {
  people: '추천인원',
  difficulty: '난이도',
  time: '소요시간',
};

function ReviewDetailInfoBoxContents({
  options,
}: {
  options: { name: Readonly<string>; value: string | number | undefined }[];
}) {
  const isDifficulty = (property: string) => property === 'difficulty';

  return (
    <>
      {options.map((v) => (
        <ReviewDetailInfoBox key={generateUUID(20)}>
          <ReviewDetailInfoTitle>
            {reviewInfoEnum[v.name]}
          </ReviewDetailInfoTitle>
          {isDifficulty(v.name) ? (
            [...Array(Number(v.value))].map(() => (
              <LockRateSmall
                fill={theme.color.primary.purple}
                style={{ marginTop: '10px' }}
              />
            ))
          ) : (
            <ReviewDetailInfoParagraph>{v.value}</ReviewDetailInfoParagraph>
          )}
        </ReviewDetailInfoBox>
      ))}
    </>
  );
}

export default function ReviewDetailTop({ themeId }: Props) {
  const data: ReviewThemeDetailType = {
    ageLimit: '청소년 이용불가',
    avgStar: 4.93,
    description: `친구들과 술한잔 걸치고 집으로 돌아가던 어느 날,
                    우연히 투신 자살을 목격하게 된다.호기심에 끌려 투신의 현장을 기웃거리다 인기척이 들려 뒤를 돌아보니 귀여운 여자아이가 울고 있다.
                    아끼는 인형을 잃어버렸다며 인형을 찾아달라고 떼를 쓰는 아이..아이가 너무 예쁘기도 하다. 요녀석!!
                    우연히 투신 자살을 목격하게 된다.호기심에 끌려 투신의 현장을 기웃거리다 인기척이 들려 뒤를 돌아보니 귀여운 여자아이가 울고 있다.
                     `,
    difficulty: 4,
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

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [showMore, setShowMore] = useState(false);

  useLayoutEffect(() => {
    if (!descriptionRef.current) return;
    if (
      descriptionRef.current.clientHeight < descriptionRef.current.scrollHeight
    )
      setShowMore(true);
  }, [descriptionRef]);

  const formatterInfo = {
    people: `${data.minPlayerCount} ~ ${data.maxPlayerCount}명`,
    difficulty: `${data.difficulty}`,
    time: `${data.time}분`,
  };

  const parsingInfoBoxModel = () =>
    useMemo(
      () =>
        [...Array(3)].reduce((a, _, i) => {
          a.push({
            name: InfoBoxModelType[i],
            value: formatterInfo[InfoBoxModelType[i]],
          });
          return a;
        }, []),
      [data]
    );

  const handleMoreBtnClick = () => {
    if (!descriptionRef.current) return;

    descriptionRef.current.classList.add('show');
    setShowMore(!showMore);
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
        <ReviewDetailRateSection>
          <Star fill={theme.color.primary.purple} />
          <ReviewDetailRate>
            <BoldTextSpan>{data.avgStar}</BoldTextSpan>/5
            <ReviewCountText>리뷰 ({data.reviewCount})</ReviewCountText>
          </ReviewDetailRate>
        </ReviewDetailRateSection>
        <ReviewDetailInfoBoxSection>
          <ReviewDetailInfoBoxContents options={parsingInfoBoxModel()} />
        </ReviewDetailInfoBoxSection>
        <ReviewDetailDescriptionSection>
          <DescriptionTitle>테마 설명</DescriptionTitle>
          <DescriptionContents ref={descriptionRef}>
            {data.description}
          </DescriptionContents>
          <DescriptionMoreBtn
            className={showMore ? 'show' : 'hide'}
            onClick={handleMoreBtnClick}
          >
            ...더보기
          </DescriptionMoreBtn>
        </ReviewDetailDescriptionSection>
      </ReviewDetailContentsContainer>
    </ReviewDetailTopContainer>
  );
}
