import React, { ChangeEvent, FC, useState } from 'react';
import { SctButton } from '@fabiankuhn/stencil-components-react';

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
      <SctButton onClicked={addWordHandler} type="primary">Add Word</SctButton>
    </>
  );
};

export default WordCloudInput;
