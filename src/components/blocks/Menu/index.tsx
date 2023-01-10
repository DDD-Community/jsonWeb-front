import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { MenuListItemType } from '@src/types/common';
import * as S from './style';
import { DownArrow, UpArrow } from '../../../assets/svg/icon';

type MenuPropsType = {
  list: MenuListItemType[];
  setSelectedOption: Dispatch<SetStateAction<string>>;
};

export default function Menu({ list, setSelectedOption }: MenuPropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(0);
  const [selectedItem, setSelectedItem] = useState<string | null>('');

  const menuBtnClick = () => setIsOpen(!isOpen);

  function getItemId(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setSelectedItemId(+e.currentTarget.id);
  }

  function itemClick(el: MenuListItemType) {
    setSelectedItem(el.name);
    setSelectedOption(el.value || '');
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
            <S.MenuItem onClick={() => itemClick(el)} type="button">
              {el.name}
            </S.MenuItem>
          </li>
        ))}
      </S.MenuItemContainer>
    </S.MenuBtnWrapper>
  );
}
