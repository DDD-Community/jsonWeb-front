import styled from '@emotion/styled';

export const TopHeader = styled.div``;

export const InputWrapper = styled.form`
  display: flex;
  gap: 11px;
  padding: 16px 12px;
  border-bottom: 2px solid #e9e9e9;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 0;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #111111;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #999999;
  }
`;

export const RecentSearchesWrapper = styled.div`
  padding-top: 25px;
  height: 100vh;

  h1:first-child {
    padding-bottom: 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #111111;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #111111;
    }

    button {
      cursor: pointer;
    }
  }

  div:last-child {
    padding-top: 15px;
    button {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #6b53dd;
      cursor: pointer;
    }
  }
`;

export const SearchResultWrapper = styled.div`
  height: 100vh;

  & > div {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 16px;
  }
`;
