import { useState, SetStateAction, Dispatch } from 'react';
import { StarRate, LockRate } from '@assets/svg/icon';
import { RATE } from '@src/constants';
import { CustomTheme as themes } from '@styles/Theme';
import { StarRateContainer, StarWrapper } from './index.style';

interface Props {
  type: string | null;
  setRateOption: Dispatch<SetStateAction<number>>;
}

export default function Star({ type, setRateOption }: Props) {
  const [hoveredStarIndex, setHoveredStarIndex] = useState(0);
  const [clickedStarIndex, setClickedStarIndex] = useState(0);

  const handleStar = (num: number) => {
    setClickedStarIndex(num);
    setRateOption(num);
  };

  const fillStarOfIndex = (num: number, event?: string): string => {
    if (
      (event === 'enter' && hoveredStarIndex >= num) ||
      (event === 'leave' && clickedStarIndex >= num)
    ) {
      return themes.color.primary.purple;
    }
    return themes.color.grayscale.gray_500;
  };

  return (
    <StarRateContainer>
      {[1, 2, 3, 4, 5].map((num) => (
        <StarWrapper
          key={num}
          type="button"
          onMouseEnter={() => setHoveredStarIndex(num)}
          onMouseLeave={() => setHoveredStarIndex(0)}
          onClick={() => handleStar(num)}
          className="star_wrapper"
        >
          {type === RATE.STAR && (
            <StarRate
              key={num}
              className="star_btn"
              fill={fillStarOfIndex(
                num,
                hoveredStarIndex === 0 ? 'leave' : 'enter'
              )}
            />
          )}
          {type === RATE.LOCK && (
            <LockRate
              key={num}
              className="star_btn"
              fill={fillStarOfIndex(
                num,
                hoveredStarIndex === 0 ? 'leave' : 'enter'
              )}
            />
          )}
        </StarWrapper>
      ))}
    </StarRateContainer>
  );
}
