import { LikeBtn } from '@src/components/atom';
import Feed from '@src/components/blocks/Feed';
import MyContentsHeader from '@src/components/blocks/MyHeader';
import { BoastListType } from '@src/types/boast';
import { MenuListItemType } from '@src/types/common';
import {
  MyBoastContainer,
  BoastFeed,
  FeedContents,
  ThemeTitle,
  LikeBtnBox,
} from './style';

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
        'https://images.unsplash.com/photo-1621775532406-c680225e93dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
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
        'https://images.unsplash.com/photo-1621775532406-c680225e93dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
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
        'https://images.unsplash.com/photo-1621775532406-c680225e93dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      hashtags: ['#내가 최고'],
    },
  ],
  totalNumber: 30,
  isLast: false,
};

const MoreMenuList: MenuListItemType[] = [
  { id: 0, name: '인증 수정' },
  { id: 1, name: '인증 삭제' },
];

export default function MyBoast() {
  return (
    <MyBoastContainer>
      {dummyData.boastList.map((el) => (
        <BoastFeed key={el.boastId}>
          <MyContentsHeader
            target="boast"
            targetId={el.boastId}
            date={el.modifiedAt}
            more={MoreMenuList}
          />
          <FeedContents>
            <ThemeTitle>
              <span className="black">{el.cafeName}</span>&nbsp;|&nbsp;
              <span className="green">{el.themeName}</span>
            </ThemeTitle>
            <Feed image={el.boastImage} hashtags={el.hashtags} />
            <LikeBtnBox>
              <LikeBtn isLiked={el.isLiked} count={el.likeCount} />
            </LikeBtnBox>
          </FeedContents>
        </BoastFeed>
      ))}
    </MyBoastContainer>
  );
}
