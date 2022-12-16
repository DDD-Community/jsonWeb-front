import styled from '@emotion/styled';

export const CardListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px -9.5px;
`;

export const CardWrapper = styled.li`
  width: 50%;
  padding: 10px 9.5px;
`;

export const CardImgWrapper = styled.div`
  position: relative;
  padding-bottom: 12px;
`;

export const HeartIcon = styled.div`
  position: absolute;
  right: 12px;
  bottom: 20px;
`;

export const CardThumbnail = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  width: calc(100%);
  align-items: center;
  padding-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardDescription = styled.p`
  width: calc(100%);
  padding-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #707070;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardSubDescriptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2px;
  }
`;

export const CardSubDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #707070;
`;
