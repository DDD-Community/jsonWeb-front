import {
  Dispatch,
  SetStateAction,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { useSelect } from '@hooks/useSelect';
import { ReviewThemeType } from '@src/types/review';
import { DownArrowGray } from '@assets/svg/icon';
import {
  Label,
  SelectContainer,
  Select,
  SelectButton,
  SelectItemWrapper,
  SelectItem,
} from './index.style';

interface Props {
  options: ReviewThemeType[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  width: string | number;
  maxHeight: number;
  name: string;
  handleSelectOptionClick: any;
  [x: string]: any;
}

export default function SelectBox({
  options,
  selectedOption,
  setSelectedOption,
  width,
  maxHeight,
  name,
  handleSelectOptionClick,
  ...props
}: Props) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [clickSelectedBox, setClickSelectedBox] = useSelect(labelRef);

  const handleOpenSelectBox = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLLabelElement;
    let state = true;

    if (clickSelectedBox && target.nodeName === 'SELECT') state = !state;

    setClickSelectedBox(state);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!e.code) return;
    if (e.code === 'Enter' || e.code === 'Space') setClickSelectedBox(true);
  };

  const handleSelectBox = (e: any, option?: string) => {
    const optionValue = option || e.target.value;
    setSelectedOption(optionValue);
    setClickSelectedBox(false);
    handleSelectOptionClick(optionValue);
  };

  return (
    <Label
      {...props}
      tabIndex={0}
      role="group"
      aria-label={name}
      width={width}
      ref={labelRef}
      onKeyDown={handleKeyDown}
      onMouseDown={handleOpenSelectBox}
      className="review--select__theme"
    >
      <SelectContainer>
        <Select value={selectedOption} onChange={handleSelectBox}>
          {options.map((option) => (
            <option key={option.themeId} value={option.title}>
              {option.title}
            </option>
          ))}
        </Select>
        <SelectButton>
          <DownArrowGray />
        </SelectButton>
      </SelectContainer>
      <SelectItemWrapper isOpen={clickSelectedBox}>
        {options.map((option) => (
          <SelectItem
            key={option.themeId}
            onClick={(e) => handleSelectBox(e, option.title)}
            maxHeight={maxHeight}
            isSelected={option.title === selectedOption}
          >
            {option.title}
          </SelectItem>
        ))}
      </SelectItemWrapper>
    </Label>
  );
}
