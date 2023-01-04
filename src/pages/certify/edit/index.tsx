import { useState } from 'react';
import SelectBox from '@components/blocks/SelectBox';
import { ReviewThemeType } from '@src/types/review';
import { THEME_NOT_EXIST } from '@src/constants';
import { DEFAULT_ARIA_THEME_LABEL } from '@src/constants/aria-label';
import { Button } from '@src/components/atom';
import { ButtonEnum } from '@src/constants/common';
import HashtagInput from '@src/components/blocks/HashtagInput';
import {
  CertifySection,
  EditSection,
  ImagePreview,
  SubmitSection,
} from './style';

export default function Edit() {
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

  const [themeSelectedOption, setThemeSelectedOption] = useState(
    data[0].title || THEME_NOT_EXIST
  );
  const [tagList, setTagList] = useState<string[]>([]);

  const handleSelectOptionClick = (v: any) => v;

  const imgVisible = false;

  const uploadImage = () => {};

  const submitCertify = () => {};

  return (
    <CertifySection className="Certify">
      <SelectBox
        options={data}
        selectedOption={themeSelectedOption}
        setSelectedOption={setThemeSelectedOption}
        width={160}
        maxHeight={44}
        name={DEFAULT_ARIA_THEME_LABEL}
        handleSelectOptionClick={handleSelectOptionClick}
      />
      <EditSection>
        <Button
          buttonType={ButtonEnum.WHITE}
          height={40}
          onClick={uploadImage}
          text="인증 사진 업로드"
          disabled={false}
        />
        <ImagePreview>{imgVisible && <img alt="Certification" />}</ImagePreview>
        <HashtagInput tagList={tagList} setTagList={setTagList} />
      </EditSection>
      <SubmitSection>
        <Button
          buttonType={ButtonEnum.PURPLE}
          height={48}
          onClick={submitCertify}
          text="탈출 인증 올리기"
          disabled={false}
        />
      </SubmitSection>
    </CertifySection>
  );
}
