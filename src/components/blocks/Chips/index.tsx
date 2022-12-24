import { Dispatch, SetStateAction, MouseEvent } from 'react';

import { EvaluationType } from '@src/types/types';
import { ChipContainer, ChipItem } from './index.style';

interface Props {
  options: EvaluationType[];
  selectedOption: EvaluationType;
  setSelectedOption: Dispatch<SetStateAction<EvaluationType>>;
  name: string;
  height: number;
}

export default function Chips({
  options,
  selectedOption,
  setSelectedOption,
  name,
  height,
}: Props) {
  const handleChips = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const className = target.classList[0];
    const { textContent } = target.attributes[1];

    setSelectedOption({
      id: Number(className?.slice(13)),
      title: textContent || '',
    });
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
          isSelected={selectedOption.id === option.id}
        >
          {option.title}
        </ChipItem>
      ))}
    </ChipContainer>
  );
}
