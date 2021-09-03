import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sct-button',
  styleUrl: 'sct-button.css',
  shadow: true,
})
export class SctButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
