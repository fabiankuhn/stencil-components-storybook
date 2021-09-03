import { newSpecPage } from '@stencil/core/testing';
import { SctButton } from '../sct-button';

describe('sct-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SctButton],
      html: `<sct-button></sct-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sct-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sct-button>
    `);
  });
});
