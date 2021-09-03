import React, { ChangeEvent, FC, useState } from 'react';
import Button from '../button/Button';

type Props = {
  // eslint-disable-next-line no-unused-vars
  addWord: (word: string) => void
};

const WordCloudInput: FC<Props> = ({ addWord }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addWordHandler = () => {
    addWord(inputValue);
    setInputValue('');
  };

  return (
    <>
      <input value={inputValue} onChange={changeInputHandler} />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type */}
      <Button onClick={addWordHandler} type="primary">Add Word</Button>
    </>
  );
};

export default WordCloudInput;
