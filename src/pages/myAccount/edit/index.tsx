import React, { useState, useRef } from 'react';
import { Pencil } from '@src/assets/svg/icon';
import { useGetCurrentUser } from '@src/lib/hooks/queries/user';
import { useDefaultProfile } from '@hooks/useDefaultProfile';
import { useToast } from '@src/store/Toast';
import {
  ProfileSection,
  ProfileImageWrapper,
  ProfileImage,
  ProfileImageBtn,
  NickNameWrapper,
  NickNameInput,
  NickNameTitle,
  NickNameValidator,
  NickNameDuplicateBtn,
} from './index.style';

const VALIDATE_TEXT = {
  DUPLICATE: '중복된 닉네임입니다.',
  OVERTEXT: '닉네임은 2-6자이하로 입력주세요.',
  SUCCESS: '사용할 수 있는 닉네임입니다.',
};

const NICK_NAME_LENGTH = {
  MAX: 6,
  MIN: 2,
};

export default function Edit() {
  const data = useGetCurrentUser();
  const defaultImage = useDefaultProfile();
  const { fireToast } = useToast();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  //   const [imageUrl, setImageUrl] = useState(data?.profileImageUrl);
  const [nickname, setNickname] = useState(data?.nickname);
  const [duplicateChk, setDuplicateChk] = useState(false);
  const [validateText, setValidateText] = useState('');

  const isOverText = (text: string = '') =>
    text.length < NICK_NAME_LENGTH.MIN || text.length > NICK_NAME_LENGTH.MAX;

  const validate = () => {
    const error = (type = VALIDATE_TEXT.OVERTEXT) => {
      if (type === VALIDATE_TEXT.OVERTEXT)
        setValidateText(VALIDATE_TEXT.OVERTEXT);

      if (inputRef.current && paragraphRef.current) {
        inputRef.current.classList.add('validate-error');
        paragraphRef.current.classList.add('validate-error');
      }
    };
    const success = () => {
      setValidateText(VALIDATE_TEXT.SUCCESS);

      if (inputRef.current && paragraphRef.current) {
        inputRef.current.classList.remove('validate-error');
        paragraphRef.current.classList.remove('validate-error');
      }
    };

    return {
      error,
      success,
    };
  };

  const handleOnChangeValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);

    if (isOverText(e.target.value)) {
      validate().error();
      return;
    }

    validate().success();
    /**
     * @todo 중복확인 API 완료 이후 추가
     */
    setDuplicateChk(false);
  };

  const submit = () => {
    if (!duplicateChk) fireToast({ content: '중복확인이 필요합니다.❌' });
  };
  console.log(submit);

  return (
    <ProfileSection>
      <ProfileImageWrapper>
        <ProfileImage url={data?.profileImageUrl || defaultImage} />
        <ProfileImageBtn>
          <Pencil />
        </ProfileImageBtn>
      </ProfileImageWrapper>
      <NickNameWrapper ref={wrapperRef}>
        <NickNameTitle>닉네임</NickNameTitle>
        <NickNameDuplicateBtn>중복확인</NickNameDuplicateBtn>
        <NickNameInput
          type="text"
          placeholder={data?.nickname}
          onChange={handleOnChangeValidation}
          value={nickname}
          maxLength={NICK_NAME_LENGTH.MAX}
          ref={inputRef}
        />
        <NickNameValidator ref={paragraphRef}>{validateText}</NickNameValidator>
      </NickNameWrapper>
    </ProfileSection>
  );
}
