import Menu from '@src/components/blocks/Menu';
import { MenuListItemType } from '@src/types/common';
import { BoastListType } from '@src/types/boast';
import BoastItem from '@src/components/template/boast/item';
import { BoastContainer, BoastHeaderSection, BoastListTitle } from './style';

const dummyData: BoastListType = {
  boastList: [
    {
      boastId: 1,
      cafeName: '카페1',
      themeName: '테마1',
      writerNickname: '더미 유저',
      writerProfileImage: '',
      writerBadge: '초보',
      genre: ['공포', '로맨스'],
      modifiedAt: '2022-12-31',
      isLiked: false,
      likeCount: 0,
      boastImage:
        'https://images.unsplash.com/photo-1622595674295-724dffbc9bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      hashtags: ['#추천해요', '#추천해요', '#쉬워요'],
    },
    {
      boastId: 2,
      cafeName: '카페2',
      themeName: '테마2',
      writerNickname: '더미 유저',
      writerProfileImage: '',
      writerBadge: '초보',
      genre: ['공포', '미스터리'],
      modifiedAt: '2022-12-24',
      isLiked: false,
      likeCount: 0,
      boastImage:
        'https://images.unsplash.com/photo-1622595674295-724dffbc9bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      hashtags: ['#어려워요', '#무서워요'],
    },
    {
      boastId: 3,
      cafeName: '카페3',
      themeName: '테마3',
      writerNickname: '더미 유저',
      writerProfileImage: '',
      writerBadge: '초보',
      genre: ['로맨스', '미스터리'],
      modifiedAt: '2022-12-24',
      isLiked: false,
      likeCount: 0,
      boastImage:
        'https://images.unsplash.com/photo-1622595674295-724dffbc9bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      hashtags: ['#내가 최고'],
    },
  ],
  totalNumber: 30,
  isLast: false,
};

const BoastMenuList: MenuListItemType[] = [
  { id: 0, name: '최신순' },
  { id: 1, name: '인기순' },
];

export default function List() {
  return (
    <BoastContainer>
      <BoastHeaderSection>
        <BoastListTitle>탈출 인증</BoastListTitle>
        <Menu list={BoastMenuList} />
      </BoastHeaderSection>
      {dummyData.boastList.map((el) => (
        <BoastItem key={el.boastId} boastItem={el} />
      ))}
    </BoastContainer>
  );
}
