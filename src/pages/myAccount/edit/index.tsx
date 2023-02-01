import React, { useState, useRef } from 'react';
import { Pencil } from '@src/assets/svg/icon';
import { Button } from '@components/atom';
import {
  useGetCurrentUser,
  useGetDuplicateUser,
  useUpdateUserMutation,
} from '@src/lib/hooks/queries/user';
import { useDefaultProfile } from '@hooks/useDefaultProfile';
import { ButtonEnum } from '@constants/common';
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
  SubmitWrapper,
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
  const user = useGetCurrentUser();
  const defaultImage = useDefaultProfile();
  const { fireToast } = useToast();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  //   const [imageUrl, setImageUrl] = useState(user?.profileImageUrl || '');
  const [nickname, setNickname] = useState(user?.nickname || '');
  const [duplicateChk, setDuplicateChk] = useState(false);
  const [validateChk, setValidateChk] = useState(true);
  const [validateText, setValidateText] = useState('');

  const { data, refetch } = useGetDuplicateUser({ nickname });
  const { mutate: submitMutate } = useUpdateUserMutation({
    body: { newNickname: nickname, newProfileImageUrl: '' },
  });

  const isOverText = (text: string = '') =>
    text.length < NICK_NAME_LENGTH.MIN || text.length > NICK_NAME_LENGTH.MAX;

  function validate() {
    return {
      error: (type = VALIDATE_TEXT.OVERTEXT) => {
        setValidateText(type);
        handleClassName(VALIDATE_TEXT.OVERTEXT);
      },
      success: () => {
        setValidateText(VALIDATE_TEXT.SUCCESS);
        handleClassName(VALIDATE_TEXT.SUCCESS);
      },
    };
  }

  const handleOnChangeValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setDuplicateChk(false);

    if (isOverText(e.target.value)) {
      setValidateChk(false);
      validate().error();
      return;
    }

    validate().success();
    setValidateChk(true);
  };

  const handleDuplicate = () => {
    if (!validateChk) return;
    refetch().then(() => {
      if (data?.isDuplicated) {
        validate().error(VALIDATE_TEXT.DUPLICATE);
        setDuplicateChk(false);
        return;
      }
      if (paragraphRef.current) {
        paragraphRef.current.classList.remove('validate-success');
      }
      validate().success();
      setDuplicateChk(true);
    });
  };

  const handleClassName = (type: string) => {
    const FUNC = () => {
      if (type === VALIDATE_TEXT.SUCCESS) return ['remove', 'add'];
      if (type === VALIDATE_TEXT.OVERTEXT) return ['add', 'remove'];
      return ['remove', 'add'];
    };

    if (inputRef.current && paragraphRef.current) {
      inputRef.current.classList[FUNC()[0]]('validate-error');
      paragraphRef.current.classList[FUNC()[0]]('validate-error');
      paragraphRef.current.classList[FUNC()[1]]('validate-success');
    }
  };

  const submit = () => {
    if (!duplicateChk) {
      fireToast({ content: '중복확인이 필요합니다.❌' });
      return;
    }
    if (!validateChk) {
      fireToast({ content: '유효한 닉네임이 아닙니다.❌' });
      return;
    }

    submitMutate();
  };

  return (
    <ProfileSection>
      <ProfileImageWrapper>
        <ProfileImage url={user?.profileImageUrl || defaultImage} />
        <ProfileImageBtn>
          <Pencil />
        </ProfileImageBtn>
      </ProfileImageWrapper>
      <NickNameWrapper ref={wrapperRef}>
        <NickNameTitle>닉네임</NickNameTitle>
        <NickNameDuplicateBtn onClick={handleDuplicate}>
          중복확인
        </NickNameDuplicateBtn>
        <NickNameInput
          type="text"
          placeholder={user?.nickname}
          onChange={handleOnChangeValidation}
          value={nickname}
          maxLength={NICK_NAME_LENGTH.MAX}
          ref={inputRef}
        />
        <NickNameValidator ref={paragraphRef}>{validateText}</NickNameValidator>
      </NickNameWrapper>
      <SubmitWrapper>
        <Button
          buttonType={ButtonEnum.PURPLE}
          height={40}
          onClick={submit}
          text="프로필 수정하기"
          disabled={!validateChk}
        />
      </SubmitWrapper>
    </ProfileSection>
  );
}
