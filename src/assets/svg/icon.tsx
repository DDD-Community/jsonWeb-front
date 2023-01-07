export { ReactComponent as Close } from './close.svg';
export { ReactComponent as Back } from './back.svg';
export { ReactComponent as Logo } from './EXITLogo.svg';
export { ReactComponent as Search } from './search.svg';
export { ReactComponent as LeftArrow } from './leftArrow.svg';
export { ReactComponent as LeftArrowBlack } from './leftArrowBlack.svg';
export { ReactComponent as RightArrow } from './rightArrow.svg';
export { ReactComponent as DownArrow } from './downArrow.svg';
export { ReactComponent as UpArrow } from './upArrow.svg';
export { ReactComponent as NavGray } from './nav_gray.svg';
export { ReactComponent as NavPurple } from './nav_purple.svg';
// export { ReactComponent as Star } from './star.svg';
// export { ReactComponent as HeartGray } from './heart_gray.svg';
export { ReactComponent as HeartPurple } from './heart_purple.svg';
export { ReactComponent as LoginLogo } from './loginLogo.svg';
export { ReactComponent as DownArrowGray } from './arrow_down.svg';
export { ReactComponent as StarRate } from './starRate.svg';
export { ReactComponent as StarRateSmall } from './starRate_small.svg';
export { ReactComponent as LockRate } from './lockRate.svg';
export { ReactComponent as LockRateSmall } from './lockRate_small.svg';
export { ReactComponent as Delete } from './delete.svg';
export { ReactComponent as Location } from './location.svg';
export { ReactComponent as Tag } from './tag.svg';
export { ReactComponent as AccessTime } from './accessTime.svg';
export { ReactComponent as Price } from './price.svg';
export { ReactComponent as Tel } from './tel.svg';

type HeartGrayProps = {
  stroke: string;
};

export function HeartGray({ stroke }: HeartGrayProps) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.22318 16.2905L9.22174 16.2892C6.62662 13.936 4.55384 12.0538 3.1178 10.2981C1.69324 8.55647 1 7.06152 1 5.5C1 2.97228 2.97228 1 5.5 1C6.93721 1 8.33224 1.67394 9.23865 2.73834L10 3.6324L10.7614 2.73834C11.6678 1.67394 13.0628 1 14.5 1C17.0277 1 19 2.97228 19 5.5C19 7.06153 18.3068 8.55653 16.882 10.2996C15.4459 12.0566 13.3734 13.9409 10.7786 16.2989C10.7782 16.2993 10.7778 16.2996 10.7775 16.2999L10.0026 17L9.22318 16.2905Z"
        fill="white"
        fillOpacity="0.5"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

type StarProps = {
  fill: string;
};

export function Star({ fill }: StarProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0L10.8214 4.11672L15.6085 5.52786L12.5651 9.48328L12.7023 14.4721L8 12.8L3.29772 14.4721L3.43493 9.48328L0.391548 5.52786L5.17863 4.11672L8 0Z"
        fill={fill}
      />
    </svg>
  );
}
export { ReactComponent as Like } from './like.svg';
