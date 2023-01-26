import {
  useState,
  useRef,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { MAX_LENGTH_CONTENT, PLACEHOLDER_TEXT } from '@src/constants';
import { DEFAULT_ARIA_REVIEW_TEXTAREA } from '@src/constants/aria-label';
import {
  TextAreaWrapper,
  TextAreaContents,
  TextAreaCheckValidation,
} from './index.style';

interface Props {
  content: string | '';
  setContent: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  isVisibility?: boolean;
}

export default function TextArea({
  content,
  setContent,
  placeholder = PLACEHOLDER_TEXT,
  isVisibility = true,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isOver, setIsOver] = useState(false);

  const handleContentCheck = useCallback(
    (text: string) => {
      setContent(text.slice(0, MAX_LENGTH_CONTENT));
    },
    [MAX_LENGTH_CONTENT, setContent]
  );

  const getIsOver = content.length >= MAX_LENGTH_CONTENT;

  useEffect(() => {
    if (content.length >= MAX_LENGTH_CONTENT && textareaRef.current?.focus()) {
      setIsOver(true);
      return;
    }
    setIsOver(!isOver);
  }, [content]);

  return (
    <TextAreaWrapper>
      <TextAreaContents
        ref={textareaRef}
        role="form"
        aria-label={DEFAULT_ARIA_REVIEW_TEXTAREA}
        placeholder={placeholder}
        value={content}
        isOver={getIsOver}
        isVisibility={isVisibility}
        onChange={(e) => handleContentCheck(e.target.value)}
      />
      <TextAreaCheckValidation isOver={getIsOver}>
        {content.length} / {MAX_LENGTH_CONTENT}
      </TextAreaCheckValidation>
    </TextAreaWrapper>
  );
}
