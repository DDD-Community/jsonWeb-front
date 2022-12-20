import styled from '@emotion/styled';
import themes from '../../styles/Theme/theme';

export const LoginPageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themes.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 200px 0;
`;

export const DescriptionDiv = styled.div`
  text-align: center;
  padding: 40px;
`;

export const LoginDescription = styled.p`
  color: ${themes.color.gray};
  font-weight: ${themes.font.weight.regular};
  padding: 5px;
`;

export const TextHighlight = styled.span<{ color: string }>`
  color: ${(props) =>
    props.color === 'green' ? themes.color.green : themes.color.purple};
`;

export const LoginButton = styled.button`
  border: 0;
  outline: 0;
  width: 320px;
  background-color: ${themes.color.kakao};
  color: ${themes.color.kakaoLabel};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  font-weight: ${themes.font.weight.semiBold};
  font-size: 15px;
`;
