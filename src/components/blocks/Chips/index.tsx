import { Dispatch, SetStateAction, MouseEvent } from 'react';

import { EvaluationType } from '@src/types/types';
import { ChipContainer, ChipItem } from './index.style';

interface Props {
  options: EvaluationType[];
  selectedOption: EvaluationType[];
  setSelectedOption: Dispatch<SetStateAction<EvaluationType[]>>;
  name: string;
  height: number;
  canSelectNum?: number;
}

export default function Chips({
  options,
  selectedOption,
  setSelectedOption,
  name,
  height,
  canSelectNum = 1,
}: Props) {
  const isCanPushQueue = () => selectedOption.length < canSelectNum;

  const handleChips = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const className = target.classList[0];
    const { textContent } = target.attributes[1];

    const setSelectQueue = (paramSelectOptions: EvaluationType[]) => {
      setSelectedOption([
        ...paramSelectOptions,
        {
          id: Number(className?.slice(13)),
          title: textContent || '',
        },
      ]);
    };

    if (!isCanPushQueue()) selectedOption.shift();

    setSelectQueue(selectedOption);
  };

  const isActive = (option: EvaluationType) => {
    let activeFlag = false;
    selectedOption.forEach((v) => {
      if (v.id === option.id) {
        activeFlag = true;
      }
    });
    return activeFlag;
  };

  return (
    <ChipContainer role="group" aria-label={name}>
      {options.map((option) => (
        <ChipItem
          className={`chips--item__${option.id}`}
          key={option.id}
          value={option.title}
          onClick={handleChips}
          height={height}
          isSelected={isActive(option)}
        >
          {option.title}
        </ChipItem>
      ))}
    </ChipContainer>
  );
}
