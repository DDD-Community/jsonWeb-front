import React, { useEffect, useState } from 'react';
import * as S from './style';
import { DownArrow, UpArrow } from '../../../assets/svg/icon';

type MenuPropsType = {
  list: string[];
  onClickItem?: () => void;
};

export default function Menu({ list, onClickItem }: MenuPropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuList, setMenuList] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>();

  function menuBtnClick() {
    setMenuList(list.filter((el) => el !== selectedItem));
    setIsOpen(!isOpen);
  }

  function itemClick(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedItem(e.currentTarget.innerText);
    if (onClickItem) onClickItem();
    setIsOpen(false);
  }

  useEffect(() => {
    setSelectedItem(list[0]);
  }, []);

  return (
    <S.MenuBtnWrapper>
      <S.MenuBtn onClick={() => menuBtnClick()}>
        {selectedItem}
        {isOpen ? <UpArrow /> : <DownArrow />}
      </S.MenuBtn>
      <S.MenuItemContainer isOpen={isOpen}>
        {isOpen &&
          menuList.map((el) => (
            <li key={el}>
              <S.MenuItem onClick={(e) => itemClick(e)} type="button">
                {el}
              </S.MenuItem>
            </li>
          ))}
      </S.MenuItemContainer>
    </S.MenuBtnWrapper>
  );
}
