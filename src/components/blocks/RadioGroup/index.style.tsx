import styled from '@emotion/styled';

const Fieldset = styled.fieldset`
  margin: 13px 24px 0 24px;
  border: none;
`;

const Legend = styled.legend`
  font-weight: 600;
  font-size: 0;
  color: ${({ theme }) => `${theme.color.primary.purple}`};
`;

const Wrapper = styled.div`
  display: grid;
  gap: 0px;
`;

export { Fieldset, Legend, Wrapper };
