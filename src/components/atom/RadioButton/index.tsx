/* eslint-disable */
import { InputHTMLAttributes } from 'react';
import { Wrapper, Label, Radio } from './index.style';

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  key?: string | null;
  disabled?: boolean;
  name?: string | undefined;
}

export default function RadioButton({
  label,
  id,
  disabled = false,
  ...rest
}: InputElementProps) {
  return (
    <Wrapper>
      <Radio type="radio" id={id} disabled={disabled} {...rest} />
      <Label htmlFor={id} disabled={disabled}>
        {label}
      </Label>
    </Wrapper>
  );
}
