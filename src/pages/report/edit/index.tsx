/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Button from '@components/atom/Button';
import RadioGroup from '@components/blocks/RadioGroup';
import { useQueryString } from '@hooks/useQueryString';
import { reportSchema, REPORT_PLACEHOLDER_TEXT } from '@src/constants';
import TextArea from '@components/blocks/TextArea';
import { useReportMutation } from '@hooks/queries/report';
import { ReportContainer, ReportTitle, SubmitSection } from './index.style';

export default function ReportEdit() {
  const type = useQueryString('type');
  const id = useQueryString('id');

  const [selectedValue, setSelectedValue] = useState<string>(
    reportSchema[0].label
  );
  const [contents, setContents] = useState<string>('');
  const [isVisibility, setIsVisibility] = useState<boolean>(false);
  const isEtc = () => selectedValue == reportSchema[5].label;

  const setMutationBody = () => {
    const isKey = () => {
      if (type === 'review') return 'reviewId';
      if (type === 'boast') return 'boastId';
      return '';
    };

    return {
      body: {
        [isKey()]: id,
        content: isEtc() ? contents : selectedValue,
      },
    };
  };

  const { mutate: submitMutate } = useReportMutation(setMutationBody());

  const reportSelectionHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    textAreaHandler();
  }, [selectedValue]);

  const textAreaHandler = () =>
    isEtc() ? setIsVisibility(true) : setIsVisibility(false);

  const onSubmit = () => submitMutate();

  return (
    <ReportContainer>
      <ReportTitle>신고하는 이유를 알려주세요</ReportTitle>
      <RadioGroup
        legend="report"
        options={reportSchema}
        onChange={reportSelectionHandler}
        checkValue={selectedValue}
      />
      <SubmitSection>
        <TextArea
          content={contents}
          setContent={setContents}
          placeholder={REPORT_PLACEHOLDER_TEXT}
          isVisibility={isVisibility}
        />
        <Button
          buttonType={'purple'}
          height={48}
          onClick={onSubmit}
          text={'신고 등록하기'}
          disabled={!selectedValue || (isEtc() && !contents)}
        />
      </SubmitSection>
    </ReportContainer>
  );
}
