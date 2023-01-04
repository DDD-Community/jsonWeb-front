import styled from '@emotion/styled';

export const LoginContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 200px 0;
  overflow: hidden;
`;

export const DescContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

export const LoginDescription = styled.p`
  color: ${(props) => props.theme.color.grayscale.gray_200};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: 15px;
  padding: 5px;
`;

export const TextHighlight = styled.span<{ color: string }>`
  color: ${(props) =>
    props.color === 'purple'
      ? props.theme.color.primary.purple
      : props.theme.color.primary.green};
`;

export const LoginButton = styled.button`
  border: 0;
  outline: 0;
  width: 320px;
  background-color: ${(props) => props.theme.color.primary.kakao};
  color: ${(props) => props.theme.color.primary.kakaoLabel};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  font-weight: ${(props) => props.theme.font.weight.semiBold};
`;

export const RedirectContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
