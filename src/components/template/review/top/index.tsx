import { useMemo, useRef, useState, useLayoutEffect } from 'react';
import { Star, LockRateSmall } from '@src/assets/svg/icon';
import BoldTextSpan from '@components/atom/BoldTextSpan';
import { CustomTheme as theme } from '@src/styles/Theme';
import { generateUUID } from '@src/lib/util';
import { useGetThemesById } from '@hooks/queries/themes';

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
  themeId: Readonly<number>;
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
  const { data } = useGetThemesById({ themeId });
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
    people: `${data?.minPlayerCount} ~ ${data?.maxPlayerCount}명`,
    difficulty: `${data?.difficulty}`,
    time: `${data?.time}분`,
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
      <ReviewDetailThumbnail src={data?.imageUrl} height={200} />
      <ReviewDetailContentsContainer>
        <ReviewDetailTitle>{data?.name}</ReviewDetailTitle>
        <ReviewDetailGenreSection>
          {data?.genreList.map((genre) => (
            <ReviewDetailGenreItem key={genre.genreId}>
              {genre?.genreName}
            </ReviewDetailGenreItem>
          ))}
        </ReviewDetailGenreSection>
        <ReviewDetailRateSection>
          <Star fill={theme.color.primary.purple} />
          <ReviewDetailRate>
            <BoldTextSpan>{data?.avgStar}</BoldTextSpan>/5
            <ReviewCountText>리뷰 ({data?.reviewCount})</ReviewCountText>
          </ReviewDetailRate>
        </ReviewDetailRateSection>
        <ReviewDetailInfoBoxSection>
          <ReviewDetailInfoBoxContents options={parsingInfoBoxModel()} />
        </ReviewDetailInfoBoxSection>
        <ReviewDetailDescriptionSection>
          <DescriptionTitle>테마 설명</DescriptionTitle>
          <DescriptionContents ref={descriptionRef}>
            {data?.description}
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
