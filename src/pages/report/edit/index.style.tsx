import styled from '@emotion/styled';

const ReportContainer = styled.section`
  font-family: ${({ theme }) => `${theme.font.family}`};
`;
const ReportTitle = styled.h1`
  margin-top: 40px;
  margin-left: 24px;
  font-size: ${({ theme }) => `${theme.font.size.l}`};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const SubmitSection = styled.div`
  margin: 0 24px 0 24px;
  text-align: center;
`;

export { ReportContainer, ReportTitle, SubmitSection };
