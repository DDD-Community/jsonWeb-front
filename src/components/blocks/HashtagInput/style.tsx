import styled from '@emotion/styled';

export const HashtagDescription = styled.p`
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  .limit {
    color: ${({ theme }) => `${theme.color.grayscale.gray_300}`};
  }
  padding: 20px 0 15px 0;
`;

export const HashtagInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Input = styled.input`
  width: 164px;
  height: 40px;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_800}`};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
`;

export const InputCheckValidation = styled.p`
  margin-left: 10px;
  color: ${({ theme }) => `${theme.color.grayscale.gray_500}`};
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  .now {
    color: ${({ theme }) => `${theme.color.grayscale.gray_100}`};
  }
`;

export const HashtagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 15px 0 100px 0;
`;

export const Tag = styled.div`
  width: fit-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  border-radius: 4px;
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  color: ${({ theme }) => `${theme.color.grayscale.gray_000}`};
  padding: 8px;
  margin-right: 15px;
  button {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
