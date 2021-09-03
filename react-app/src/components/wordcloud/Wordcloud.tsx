import React, { FC } from 'react';
import { SctWordcloud } from '@fabiankuhn/stencil-components-react';
import WrapperDiv from './WordCloud.styes';

type Props = {
  words: string[]
};

const WordCloud: FC<Props> = ({ words }: Props) => (
  <WrapperDiv>
    <SctWordcloud words={words} />
  </WrapperDiv>
);

export default WordCloud;
