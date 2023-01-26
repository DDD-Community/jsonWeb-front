import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  padding: 13px 0 13px 0;
  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => `${theme.color.primary.white}`};
  }
`;

const Label = styled.label<{ disabled?: boolean }>`
  margin-top: 2px;
  padding-left: 6px;
  cursor: pointer;
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 3px solid ${({ theme }) => `${theme.color.grayscale.gray_500}`};
  border-radius: 50%;

  ::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
  :hover {
    outline: 2.5px solid ${({ theme }) => `${theme.color.primary.purple}`};
    ::after {
      background-color: ${({ theme }) => `${theme.color.primary.purple}`};
    }
  }
  :checked {
    outline: 2.5px solid ${({ theme }) => `${theme.color.primary.purple}`};
    ::after {
      background-color: ${({ theme }) => `${theme.color.primary.purple}`};
    }
    :hover {
      outline: 2.5px solid ${({ theme }) => `${theme.color.primary.purple}`};
      background-color: ${({ theme }) => `${theme.color.primary.white}`};
      ::after {
        background-color: ${({ theme }) => `${theme.color.primary.purple}`};
      }
    }
  }
`;

export { Wrapper, Label, Radio };
