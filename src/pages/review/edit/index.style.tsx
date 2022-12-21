import styled from '@emotion/styled';

const ReviewSection = styled.section`
  position: relative;
  padding: 0 20px;
  margin-top: 40px;
`;

const ChipsSection = styled.section`
  position: absolute;
  top: 100px;
`;

const ReviewTitle = styled.h2`
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.l}`};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const ReviewCheckSection = styled.section`
  position: absolute;
  top: 180px;
`;

const StarContainer = styled.div`
  position: relative;
  margin-top: 16px;
  margin-left: -5px;
  margin-bottom: 20px;
`;

const ReviewSubmit = styled.button`
  width: 334px;
  height: 48px;
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  align-items: center;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ theme }) => `${theme.color.primary.white}`};
  background-color: ${({ theme }) => `${theme.color.primary.purple}`};
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export {
  ReviewSection,
  ChipsSection,
  ReviewCheckSection,
  ReviewTitle,
  StarContainer,
  ReviewSubmit,
};
