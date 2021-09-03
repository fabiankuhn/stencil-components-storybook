import { newE2EPage } from '@stencil/core/testing';

describe('sct-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sct-button></sct-button>');

    const element = await page.find('sct-button');
    expect(element).toHaveClass('hydrated');
  });
});
