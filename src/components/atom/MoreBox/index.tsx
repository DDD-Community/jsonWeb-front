import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuListItemType } from '@src/types/common';
import { More } from '@src/assets/svg/icon';
import { MenuItem, MoreBtn, MoreBtnWrapper, MoreMenuContainer } from './style';

type MorePropsType = {
  list: MenuListItemType[];
  target: 'boast' | 'review';
  targetId: number;
};

export default function MoreBox({ list, target, targetId }: MorePropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const moreBtnClick = () => {
    setIsOpen(!isOpen);
  };

  /**
   * @todo targetId query string 전달
   * */
  const goEdit = () => {
    switch (target) {
      case 'boast':
        navigate(`/boast/edit?boastId=${targetId}`);
        break;
      case 'review':
        navigate(`/review/edit?reviewId=${targetId}`);
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  const goDelete = () => {
    setIsOpen(false);
  };

  return (
    <MoreBtnWrapper>
      <MoreBtn onClick={moreBtnClick}>
        <More />
      </MoreBtn>
      <MoreMenuContainer
        className={isOpen ? 'open' : 'close'}
        listLength={list.length}
      >
        {list.map((el) => (
          <li key={el.id} id={el.id.toString()} aria-hidden="true">
            {el.id === 0 ? (
              <MenuItem onClick={goEdit} type="button">
                {el.name}
              </MenuItem>
            ) : (
              <MenuItem onClick={goDelete} type="button">
                {el.name}
              </MenuItem>
            )}
          </li>
        ))}
      </MoreMenuContainer>
    </MoreBtnWrapper>
  );
}
