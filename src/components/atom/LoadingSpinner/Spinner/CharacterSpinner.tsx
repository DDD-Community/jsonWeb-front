import { Shadow, Character } from '@assets/svg/icon';
import { fullViewHeight } from '@src/lib/util/ui';
import {
  YellowStar,
  YellowCircle,
  GreenStar,
  GreenCircle,
  PinkStar,
  PinkCircle,
} from './svg';
import {
  SpinnerContainer,
  CharacterMotion,
  ShadowMotion,
  ShyMotion,
  wrapperVariants,
  characterVariants,
  shadowVariants,
  TextWrapper,
  Title,
  Description,
} from './index.style';

export function CharacterSpinner() {
  return (
    <SpinnerContainer
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      height={fullViewHeight()}
    >
      <CharacterMotion
        initial="initial"
        animate="animate"
        exit="exit"
        variants={characterVariants}
      >
        <Character />
      </CharacterMotion>
      <ShadowMotion
        initial="initial"
        animate="animate"
        exit="exit"
        variants={shadowVariants}
      >
        <Shadow />
      </ShadowMotion>
      <ShyMotion>
        <PinkCircle className="pink pink-circle" />
        <YellowStar className="yellow yellow-star" />
        <YellowCircle className="yellow yellow-circle" />
        <GreenStar className="green green-star" />
        <GreenCircle className="green green-circle" />
        <PinkStar className="pink pink-star" />
      </ShyMotion>
      <TextWrapper>
        <Title>잠시만 기다려 주세요.</Title>
        <Description>해당 페이지로 이동 중입니다.</Description>
      </TextWrapper>
    </SpinnerContainer>
  );
}
