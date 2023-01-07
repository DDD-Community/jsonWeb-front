import React, { useEffect, useState } from 'react';
import { MenuListItemType } from '@src/types/common';
import * as S from './style';
import { DownArrow, UpArrow } from '../../../assets/svg/icon';

type MenuPropsType = {
  list: MenuListItemType[];
  onClickItem?: () => void;
};

export default function Menu({ list, onClickItem }: MenuPropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>();
  const [selectedItemId, setSelectedItemId] = useState<number | null>(0);

  function menuBtnClick() {
    setIsOpen(!isOpen);
  }

  function getItemId(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setSelectedItemId(+e.currentTarget.id);
  }

  function itemClick(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedItem(e.currentTarget.innerText);

    if (onClickItem) onClickItem();
    setIsOpen(false);
  }

  useEffect(() => {
    setSelectedItem(list[0].name);
  }, []);

  return (
    <S.MenuBtnWrapper>
      <S.MenuBtn onClick={() => menuBtnClick()}>
        {selectedItem}
        {isOpen ? <UpArrow /> : <DownArrow />}
      </S.MenuBtn>
      <S.MenuItemContainer
        className={isOpen ? 'open' : 'close'}
        listLength={list.length}
        selectedItemId={selectedItemId}
      >
        {list.map((el) => (
          <li
            key={el.id}
            id={el.id.toString()}
            onClick={(e) => getItemId(e)}
            aria-hidden="true"
          >
            <S.MenuItem onClick={(e) => itemClick(e)} type="button">
              {el.name}
            </S.MenuItem>
          </li>
        ))}
      </S.MenuItemContainer>
    </S.MenuBtnWrapper>
  );
}
