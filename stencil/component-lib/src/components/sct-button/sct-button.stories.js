import {html} from 'lit-html';
import readme from './readme.md';
import {Doc} from "../../../.storybook/doc.mdx";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Buttons',
  argTypes: {
    argTypes: { clicked: { action: 'clicked' } },
  },
  parameters: {
    docs: {
      page: () => Doc(readme)
    }
  }
};

const clicked = () => {
  action("Button")("Clicked")
}

const Template = ({type}) => {
  return html`<sct-button .type=${type} @clicked=${clicked}>${type}</sct-button>`
}

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: "secondary"
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: "tertiary"
}

