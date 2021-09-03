import { newSpecPage } from '@stencil/core/testing';
import { SctWord } from './sct-word';

describe('app-word-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SctWord],
      html: `<app-word-input></app-word-input>`,
    });
    expect(page.root).toEqualHtml(`
      <app-word-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-word-input>
    `);
  });
});
