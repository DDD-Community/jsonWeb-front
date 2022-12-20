import { useEffect } from 'react';
import { useGetTypiCodeById } from '@hooks/queries/typicode';
import { typiCodeState } from '@src/store/Typicode';
import { useRecoilState } from 'recoil';

/**
 * @name [스켈레톤] - @typicode 예시 페이지
 * @description 뼈대 구조 예시
 */
export default function TypiCode() {
  /**
   * @name [data,loading] : query 호출
   */
  const { typicode, isLoading } = useGetTypiCodeById({
    typiCodeId: '1',
  });

  /**
   * @name [store] : 세팅 및 호출 대충 예시
   * @description https://recoiljs.org/docs/api-reference/core/atom 참고하면 메소드 많습니다.
   */
  const [typicodeAtom, setTypicodeAtom] = useRecoilState(typiCodeState);

  useEffect(() => {
    if (typicode) setTypicodeAtom({ data: typicode });
  }, [typicode]);

  return (
    <div>
      {isLoading ? (
        <h2>로딩중...</h2>
      ) : (
        <div>
          <h2 className="typicode__data--0">
            title : {typicodeAtom?.data?.title}
          </h2>
          <h3 className="typicode__data--1">userId : {typicode?.userId}</h3>
          <p className="typicode__data--2">id : {typicode?.id}</p>
          <p className="typicode__data--3">complete : {typicode?.title}</p>
        </div>
      )}
    </div>
  );
}
