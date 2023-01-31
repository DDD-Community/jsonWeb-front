import styled from '@emotion/styled';

const NoDataSection = styled.section`
  margin-top: 40px;
`;

const TextWrapper = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.l}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
  color: ${({ theme }) => `${theme.color.grayscale.gray_200}`};
  margin-left: 0;
  margin-top: 20px;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => `${theme.font.size.xxl}`};
  font-weight: ${({ theme }) => `${theme.font.weight.bold}`};
  color: ${({ theme }) => `${theme.color.primary.black}`};
`;

const Description = styled.p`
  margin-top: -5px;
`;

export { NoDataSection, TextWrapper, Title, Description };
