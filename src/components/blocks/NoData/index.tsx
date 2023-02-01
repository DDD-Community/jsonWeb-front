import { NoDataDetail } from '@assets/svg/icon';
import { NoDataSection, TextWrapper, Title, Description } from './index.style';

interface Props {
  title: string;
  des: string;
}

export default function NoData({ title, des }: Props) {
  return (
    <NoDataSection>
      <NoDataDetail />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{des}</Description>
      </TextWrapper>
    </NoDataSection>
  );
}
