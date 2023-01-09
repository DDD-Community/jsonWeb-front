import styled from '@emotion/styled';

export const BoastDetailBottomContainer = styled.section`
  position: relative;
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};
`;

export const BoastDetailBottomHeaderSection = styled.section`
  margin: 10px 20px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  button {
    margin-bottom: 5px;
    white-space: nowrap;
  }
`;

export const BoastHeaderContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 327px;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayscale.gray_600};
`;

export const BoastHeaderTitle = styled.h2`
  display: inline;
  font-size: ${({ theme }) => `${theme.font.size.xxl}`};
  font-weight: ${({ theme }) => `${theme.font.weight.semiBold}`};
`;

export const BoastHeaderRate = styled.h3`
  font-size: ${({ theme }) => `${theme.font.size.l}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
  margin-bottom: 12px;
`;

export const BoastHeaderSort = styled.div`
  margin-top: -1px;
`;

export const BoastDetailBottomListSection = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
