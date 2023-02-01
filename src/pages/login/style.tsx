import styled from '@emotion/styled';

export const LoginContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 200px 0;
  gap: 200px;
  overflow: hidden;
  z-index: 999;
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
