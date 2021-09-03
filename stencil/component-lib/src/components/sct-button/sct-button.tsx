import {Component, Host, h, Prop, EventEmitter, Event} from '@stencil/core';

// noinspection HtmlUnknownAttribute
@Component({
  tag: 'sct-button',
  styleUrl: 'sct-button.scss',
  shadow: true,
})
export class SctButton {

  /** Style of the Button colors */
  @Prop() type: "primary" | "secondary" | "tertiary" = "primary"
  @Event() clicked: EventEmitter;

  private clickHandler = (event: UIEvent) => {
    this.clicked.emit(event)
  }

  render() {
    return (
      <Host>
        <button class={this.type} onClick={this.clickHandler}>
          <slot/>
        </button>
      </Host>
    );
  }

}
