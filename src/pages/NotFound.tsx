import styled from '@emotion/styled';
import { Close } from '../assets/svg/icon';

export default function NotFound() {
  return (
    <ErrorPage>
      <Close />
      not found skeleton
    </ErrorPage>
  );
}

const ErrorPage = styled.div`
  color: ${(props) => props.theme.color.primary.kakao};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;
