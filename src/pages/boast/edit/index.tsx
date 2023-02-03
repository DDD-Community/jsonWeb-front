import { useState, ChangeEvent, MouseEvent, useRef, useEffect } from 'react';
import SelectBox from '@components/blocks/SelectBox';
import { ThemeSelectBoxType } from '@src/types/types';
import { useQueryString } from '@hooks/useQueryString';
import { useGetThemesById } from '@hooks/queries/themes';
import { useUploadImage } from '@src/lib/hooks/queries/image';
import { useBoastCreateMutation } from '@src/lib/hooks/queries/boast';
import { THEME_NOT_EXIST } from '@src/constants';
import { DEFAULT_ARIA_THEME_LABEL } from '@src/constants/aria-label';
import { Button } from '@src/components/atom';
import { ButtonEnum, IMAGE_TYPE } from '@src/constants/common';
import HashtagInput from '@src/components/blocks/HashtagInput';
import {
  BoastSection,
  EditSection,
  ImageInput,
  ImagePreview,
  ImageSizeCaution,
  SubmitSection,
} from './style';

export default function Edit() {
  const themeId = Number(useQueryString('themeId'));
  const { data: themeData } = useGetThemesById({ themeId });

  const themeSelectData: ThemeSelectBoxType[] = [
    {
      cafeId: 1,
      themeId,
      title: themeData?.name || THEME_NOT_EXIST,
    },
  ];

  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const [themeSelectedOption, setThemeSelectedOption] = useState(
    themeSelectData[0].title || THEME_NOT_EXIST
  );
  const [tagList, setTagList] = useState<string[]>([]);
  const [file, setFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState('');
  // const [imageName, setImageName] = useState('');
  const [caution, setCaution] = useState('');
  const [isFill, setIsFill] = useState(false);

  const {
    data: imageData,
    isError,
    message,
    mutate: imageMutate,
  } = useUploadImage(IMAGE_TYPE.BOAST, file);

  const { mutate: submitMutate } = useBoastCreateMutation({
    body: {
      hashtags: tagList,
      imageUrl,
      themeId,
    },
  });

  const handleSelectOptionClick = (v: any) => v;

  const selectImageFile = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    imgUploadInput.current?.click();
  };

  const changePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const targetFile = (event.target.files as FileList)[0];
    setFile(targetFile);
  };

  const uploadImage = () => {
    imageMutate();
    if (isError) setCaution(message);
    if (imageData) {
      setImageUrl(imageData.data.imageUrl);
      // setImageName(imageData.data.imageName);
    }
  };

  const submitBoast = () => {
    if (isFill) submitMutate();
  };

  useEffect(() => {
    if (file) uploadImage();
  }, [file]);

  useEffect(() => {
    if (imageUrl && tagList.length > 0) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [imageUrl, tagList]);

  return (
    <BoastSection className="boast">
      <SelectBox
        options={themeSelectData}
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
          onClick={selectImageFile}
          text="인증 사진 업로드"
          disabled={false}
        />
        <ImageInput
          type="file"
          required
          ref={imgUploadInput}
          accept="image/*"
          onChange={changePreview}
        />
        <ImagePreview url={imageUrl} />
        {caution && <ImageSizeCaution>{caution}</ImageSizeCaution>}
        <HashtagInput tagList={tagList} setTagList={setTagList} />
      </EditSection>
      <SubmitSection>
        <Button
          buttonType={ButtonEnum.PURPLE}
          height={48}
          onClick={submitBoast}
          text="탈출 인증 올리기"
          disabled={!isFill}
        />
      </SubmitSection>
    </BoastSection>
  );
}
