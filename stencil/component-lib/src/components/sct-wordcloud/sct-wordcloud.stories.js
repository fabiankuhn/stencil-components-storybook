import {html} from 'lit-html';
import readme from './readme.md';
import {Doc} from "../../../.storybook/doc.mdx";

export default {
  title: 'Components/Wordcloud',
  parameters: {
    docs: {
      page: () => Doc(readme)
    }
  },
};

export const Colorful = ({words}) =>
  html`<sct-wordcloud .words=${words}></sct-wordcloud>`;

Colorful.args = {
  words: [
    "confuse",
    "confuse",
    "medium",
    "tail",
    "tail",
    "tail",
    "tail",
    "arrange",
    "veil",
    "veil",
    "accept",
    "read",
    "rock",
    "rock",
    "rock",
    "rock",
    "rock",
    "fresh",
    "cheat",
    "enthusiasm",
    "enthusiasm",
    "enthusiasm",
    "enthusiasm",
    "enthusiasm",
    "enthusiasm",
    "enthusiasm",
    "offspring",
    "river",
  ]
};
