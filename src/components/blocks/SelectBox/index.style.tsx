import styled from '@emotion/styled';

const Label = styled.label<{ width: number | string }>`
  position: relative;
  display: inline-block;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 23px;
    width: 12px;
    height: 12px;
    background-image: url('images/logo.png');
    background-size: cover;
    cursor: pointer;
  }
`;

const SelectContainer = styled.div`
  z-index: 10;
`;

const Select = styled.select`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  color: ${(props) => `${props.theme.color.grayscale.gray_000}`};
  margin-left: 0;
  margin-bottom: 0;
  transition: all 0.3s;
  padding: 14px 16px;
  width: 100%;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const SelectButton = styled.button`
  position: absolute;
  top: 12px;
  left: 50%;
  margin-left: 42px;
  transition: all 0.3s;
  cursor: pointer;
`;
const SelectItemWrapper = styled.ul<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: left;
  outline: none;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? `100%` : 0)};
  margin-top: 6px;
  padding: 4px 4px;
  border-radius: 10px;
  z-index: 10;
  background-color: ${(props) => `${props.theme.color.primary.white}`};
  border: 2px solid ${({ theme }) => `${theme.color.grayscale.gray_600}`};
  box-shadow: ${(props) =>
    `0px 6px 8px ${props.theme.color.grayscale.gray_500}`};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  font-family: ${(props) => `${props.theme.font.family}`};
  font-size: ${(props) =>
    props.isOpen ? `${props.theme.font.size.m}` : '0px'};
  transition: all 0.3s, font-size 0s;
`;

const SelectItem = styled.li<{ maxHeight: number; isSelected: boolean }>`
  position: relative;
  display: flex;
  height: 44px;
  padding: 0px 16px;
  align-items: center;
  color: ${(props) => `${props.theme.color.grayscale.gray_200}`};
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover {
    color: ${(props) => `${props.theme.color.grayscale.gray_000}`};
    background-color: ${(props) => `${props.theme.color.grayscale.gray_700}`};
  }
`;

export {
  Label,
  SelectContainer,
  Select,
  SelectButton,
  SelectItemWrapper,
  SelectItem,
};
