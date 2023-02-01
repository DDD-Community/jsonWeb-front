/* eslint-disable */
import React from 'react';
import RadioButton from '@components/atom/RadioButton';
import { Fieldset, Legend, Wrapper } from './index.style';

interface IOption {
  label: string;
  name?: string;
  disabled?: boolean;
}

interface IOptionGroup {
  legend: string;
  options: IOption[];
  checkValue: String;
  hasFullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioGroup({
  legend,
  options,
  checkValue,
  onChange,
}: IOptionGroup) {
  return (
    <Fieldset>
      <Legend>{legend}</Legend>
      <Wrapper>
        {options.map(({ label, name, disabled }: IOption, index) => {
          const key = `radio-option-${index}`;
          return (
            <RadioButton
              value={label}
              label={label}
              key={key}
              id={key}
              name={name}
              disabled={disabled}
              onChange={onChange}
              checked={label === checkValue}
            />
          );
        })}
      </Wrapper>
    </Fieldset>
  );
}
