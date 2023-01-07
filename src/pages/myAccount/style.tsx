import styled from '@emotion/styled';

export const MyAccountContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Profile = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.color.primary.white};
  padding: 20px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 84px;
  height: 84px;
  border: 3px solid ${(props) => props.theme.color.primary.purple};
  border-radius: 50%;
  overflow: hidden;
  margin: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Level = styled.label`
  display: block;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.primary.green};
  width: fit-content;
  padding: 6px 12px;
  color: ${(props) => props.theme.color.primary.white};
  font-size: 12px;
`;

export const Nickname = styled.p`
  font-size: 20px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin: 10px;
`;

export const PointBar = styled.div`
  width: 200px;
  height: 8px;
  border-radius: ${(props) => props.theme.borderRadius.default};
  margin: 10px;
  background-color: ${(props) => props.theme.color.grayscale.gray_600};
`;

export const PointProgress = styled.div<{ now: number }>`
  width: ${(props) => `${props.now}%`};
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.color.primary.green};
`;

export const PointText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.grayscale.gray_200};
`;

export const Divider = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${(props) => props.theme.color.grayscale.gray_600};
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.color.primary.white};
  padding: 40px;
`;

export const Menu = styled.li`
  margin: 10px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuIcon = styled.img`
  width: 56px;
  height: 56px;
`;

export const MenuLabel = styled.label`
  display: block;
  color: ${(props) => props.theme.color.primary.black};
  font-size: 12px;
  padding-top: 10px;
`;
