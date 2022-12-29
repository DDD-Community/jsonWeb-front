import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 0 24px 20px;
  border-bottom: 8px solid #e9e9e9;
`;

const CafeImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

const CafeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
`;

const CafeReview = styled.div`
  display: flex;
  gap: 8px;

  span:first-of-type {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #111111;
  }

  span:last-of-type {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #707070;
  }
`;

const CafeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #e9e9e9;

  &:first-of-type {
    padding-top: 24px;
  }

  div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
`;

const CafeMenuWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #e9e9e9;

  div:first-of-type {
    flex-grow: 0;
  }

  div:last-of-type {
    flex-grow: 1;
  }
`;

const CafeMenu = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  &:first-of-type {
    padding-top: 0;
  }

  p:first-of-type {
    color: #565656;
  }

  p:last-of-type {
    color: #111111;
  }
`;

export {
  Wrapper,
  CafeImage,
  CafeTitle,
  CafeReview,
  CafeInfo,
  CafeMenu,
  CafeMenuWrapper,
};
