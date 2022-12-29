import styled from '@emotion/styled';

const ReviewDetailBottomContainer = styled.section`
  position: relative;
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};
`;

const ReviewDetailBottomHeaderSection = styled.section``;

const ButtonContainer = styled.div`
  position: relative;
  margin: 12px;

  button {
    margin-bottom: 5px;
    margin-left: 10px;
    white-space: nowrap;
  }
`;

const ReviewDetailBottomListSection = styled.section``;

export {
  ReviewDetailBottomContainer,
  ReviewDetailBottomHeaderSection,
  ButtonContainer,
  ReviewDetailBottomListSection,
};
