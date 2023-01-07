import {
  MouseEventHandler,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Close } from '@src/assets/svg/icon';
import { MAX_COUNT_TAG, MAX_LENGTH_TAG } from '@src/constants';
import {
  HashtagDescription,
  HashtagInputWrapper,
  Input,
  InputCheckValidation,
  HashtagWrapper,
  Tag,
} from './style';

type TagItemPropsType = {
  text: string;
  deleteEvent: MouseEventHandler<HTMLButtonElement>;
};

type TagListPropsType = {
  tagList: string[];
  setTagList: Dispatch<SetStateAction<string[]>>;
};

export default function HashtagInput({
  tagList,
  setTagList,
}: TagListPropsType) {
  const [tagItem, setTagItem] = useState('');
  const tagVisible = tagList.length > 0;

  const addTagItem = () => {
    if (tagList.length < MAX_COUNT_TAG) {
      const updatedTagList = [...tagList];
      updatedTagList.push(tagItem);
      setTagList(updatedTagList);
      setTagItem('');
    } else {
      setTagItem('');
    }
  };

  const onEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (tagItem.length > 0 && event.key === 'Enter') {
      addTagItem();
    }
  };

  const removeSpace = useCallback(
    (text: string) => {
      setTagItem(text.replace(/ /g, '').slice(0, MAX_LENGTH_TAG));
    },
    [setTagItem]
  );

  const deleteTagItem = (event: MouseEvent<HTMLButtonElement>) => {
    const deleteTarget =
      event.currentTarget.parentNode?.lastElementChild?.innerHTML;
    const filteredTagList = tagList.filter((el) => el !== deleteTarget);
    setTagList(filteredTagList);
  };

  return (
    <div>
      <HashtagDescription>
        해시태그를 작성해보세요&nbsp;
        <span className="limit">({MAX_COUNT_TAG}개)</span>
      </HashtagDescription>
      <HashtagInputWrapper>
        <Input
          type="text"
          value={tagItem}
          maxLength={MAX_LENGTH_TAG}
          onChange={(event) => removeSpace(event.target.value)}
          onKeyUp={onEnterKey}
        />
        <InputCheckValidation>
          <span className="now">{tagItem.length}</span> / {MAX_LENGTH_TAG}
        </InputCheckValidation>
      </HashtagInputWrapper>
      <HashtagWrapper>
        {tagVisible &&
          tagList.map((el) => (
            <Hashtag key={el} text={el} deleteEvent={deleteTagItem} />
          ))}
      </HashtagWrapper>
    </div>
  );
}

function Hashtag({ text, deleteEvent }: TagItemPropsType) {
  return (
    <Tag>
      <button type="button" onClick={deleteEvent}>
        <Close width={16} height={16} />
      </button>
      <p>{text}</p>
    </Tag>
  );
}
