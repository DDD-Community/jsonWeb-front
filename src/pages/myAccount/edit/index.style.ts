import styled from '@emotion/styled';

const ProfileSection = styled.section`
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.l}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
`;

const ProfileImageWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  margin: 20px 0;
  text-align: center;
`;

const ProfileImage = styled.div<{ url: string }>`
  width: 80px;
  height: 80px;
  background-image: url('${(props) => props.url}');
  background-color: ${({ theme }) => theme.color.legacyGrayscale.gray_000};
  background-size: cover;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.primary.white};
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const ProfileImageBtn = styled.button`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 26px;
  cursor: pointer;
`;

const NickNameWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
`;

const NickNameTitle = styled.h2`
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => `${theme.font.weight.semiBold}`};
`;

const NickNameInput = styled.input`
  width: 284px;
  height: 38px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.color.grayscale.gray_400};
  margin-left: -8px;
  margin-top: 12px;
  outline: none;

  &:focus {
    border: 1.5px solid ${({ theme }) => theme.color.primary.purple};
  }

  &.validate-error {
    border: 1.5px solid ${({ theme }) => theme.color.primary.validateError};
  }

  &.validate-success {
    border: 1.5px solid ${({ theme }) => theme.color.primary.black};
  }
`;

const NickNameValidator = styled.p`
  margin-top: 12px;
  margin-left: -5px;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};
  height: 8px;
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.validate-error {
    opacity: 1;
    transform: translateY(0);
    color: ${({ theme }) => theme.color.primary.validateError};
  }
  &.validate-success {
    opacity: 1;
    transform: translateY(0);
    color: ${({ theme }) => theme.color.primary.purple};
  }
`;

const NickNameDuplicateBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
  color: ${({ theme }) => theme.color.grayscale.gray_200};
  margin-right: 10px;
  margin-top: -4px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary.purple};
  }
`;

const SubmitWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -164px;
  margin-bottom: 240px;
  z-index: 9;

  button {
    transition: background 0.3s;
  }
`;

export {
  ProfileSection,
  ProfileImageWrapper,
  ProfileImage,
  ProfileImageBtn,
  NickNameWrapper,
  NickNameInput,
  NickNameTitle,
  NickNameValidator,
  NickNameDuplicateBtn,
  SubmitWrapper,
};
