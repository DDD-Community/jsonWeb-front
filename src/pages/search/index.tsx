import { SideWrapper } from '@src/components/template/PageLayoutWrapper';
import { Delete, Search } from '@src/assets/svg/icon';
import { useState } from 'react';
import Menu from '@src/components/blocks/Menu';
import CardList from '@src/components/blocks/Card/CardList';
import { CardListItemType } from '@src/types/types';
import { MenuListItemType } from '@src/types/common';
import {
  InputWrapper,
  RecentSearchesWrapper,
  SearchInput,
  SearchResultWrapper,
} from './style';

const menuList: MenuListItemType[] = [
  { id: 0, name: '평점순' },
  { id: 1, name: '최신순' },
];

const dummyData: CardListItemType[] = [
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'titletitletitletitletitletitle',
    description: 'descriptiondescriptiondescriptiondescriptiondescription',
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
  },
  {
    src: 'https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg',
    title: 'title',
    description: 'description',
  },
];

export default function CafeSearch() {
  const [search] = useState<boolean>(true);
  return (
    <SideWrapper>
      <InputWrapper>
        <Search />
        <SearchInput placeholder="어떤 것을 찾으시나요?" />
      </InputWrapper>
      {!search ? (
        <RecentSearchesWrapper>
          <h1>최근 검색어</h1>
          <div>
            <p>강남</p>
            <button type="button">
              <Delete />
            </button>
          </div>
          <div>
            <p>강북</p>
            <button type="button">
              <Delete />
            </button>
          </div>
          <div>
            <button type="button">전체삭제</button>
          </div>
        </RecentSearchesWrapper>
      ) : (
        <SearchResultWrapper>
          <div>
            <p>검색결과 00건</p>
            <Menu list={menuList} />
          </div>
          <CardList list={dummyData} />
        </SearchResultWrapper>
      )}
    </SideWrapper>
  );
}
