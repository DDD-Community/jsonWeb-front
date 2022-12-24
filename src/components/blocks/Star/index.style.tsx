import styled from '@emotion/styled';

const StarRateContainer = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 32px;
  padding-bottom: 24px;
`;

const StarWrapper = styled.button`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;

  &:hover {
    .star__btn {
      transform: scale(1.2);
    }
  }

  .star_btn {
    transition: all 0.2s ease-out;
  }
`;

export { StarRateContainer, StarWrapper };
