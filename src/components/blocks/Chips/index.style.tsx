import styled from '@emotion/styled';

const ChipContainer = styled.ul`
  width: 375px;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  z-index: 1;
  margin-left: -20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChipItem = styled.li<{
  height: number;
  isSelected: boolean;
}>`
  width: 100%;
  white-space: nowrap;
  border-radius: 10px;
  padding: 8px 12px;
  margin-left: 10px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 2px solid
    ${(props) =>
      props.isSelected
        ? `${props.theme.color.primary.purple}`
        : `${props.theme.color.grayscale.gray_700}`};
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_700}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
  font-size: ${({ theme }) => `${theme.font.size.m}`};

  &:first-of-type {
    margin-left: 20px;
  }
  &:last-of-type {
    margin-right: 20px;
  }
`;

export { ChipContainer, ChipItem };
