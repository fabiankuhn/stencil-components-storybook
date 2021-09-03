import React, { FC, useState } from 'react';
import WordCloudInput from '../components/wordcloud-input/WordcloudInput';
import WordCloud from '../components/wordcloud/Wordcloud';
import Page from './WordCloudPage.styles';

const WordcloudPage: FC = () => {
  const [words, setWords] = useState<string[]>([]);

  return (
    <Page>
      <WordCloudInput addWord={(word) => setWords((prev) => [...prev, word])} />
      <WordCloud words={words} />
    </Page>
  );
};

export default WordcloudPage;
