import { useNavigate } from 'react-router-dom';
import { Button } from '@components/atom';
import Menu from '@components/blocks/Menu';
import { ButtonEnum } from '@constants/common';
import { BoastListType } from '@src/types/boast';
import { MenuListItemType } from '@src/types/common';
import BoastItem from '../item';
import {
  BoastDetailBottomContainer,
  BoastDetailBottomHeaderSection,
  BoastDetailBottomListSection,
  BoastHeaderContentsContainer,
  BoastHeaderRate,
  BoastHeaderSort,
  BoastHeaderTitle,
  ButtonContainer,
} from './style';

interface Props {
  boastId: Readonly<number | undefined>;
}

export default function BoastDetailBottom({ boastId }: Props) {
  const navigate = useNavigate();
  /**
   * @todo boastId query string 전달
   * */
  const goBoastEdit = () => {
    navigate(`/boast/edit?themeId=${boastId}`);
  };

  const data: BoastListType = {
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
    { id: 1, name: '좋아요순' },
  ];

  return (
    <BoastDetailBottomContainer>
      <BoastDetailBottomHeaderSection>
        <ButtonContainer>
          <Button
            buttonType={ButtonEnum.WHITE}
            height={40}
            onClick={goBoastEdit}
            text="인증 올리기"
            disabled={false}
          />
        </ButtonContainer>
        <BoastHeaderTitle>방탈출러의 리뷰</BoastHeaderTitle>
        <BoastHeaderContentsContainer>
          <BoastHeaderRate>
            {data.boastList.length}명의 탈출 고수가 있네요
          </BoastHeaderRate>
          <BoastHeaderSort>
            <Menu list={BoastMenuList} />
          </BoastHeaderSort>
        </BoastHeaderContentsContainer>
      </BoastDetailBottomHeaderSection>
      <BoastDetailBottomListSection>
        {data?.boastList.map((el) => (
          <BoastItem key={el.boastId} boastItem={el} />
        ))}
      </BoastDetailBottomListSection>
    </BoastDetailBottomContainer>
  );
}
