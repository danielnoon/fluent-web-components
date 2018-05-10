import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class FluentButtonComponent {
  @Element() el!: HTMLElement;

  @Prop() background: string;
  @Prop() foreground: string;
  @Prop() backgroundPointerOver: string;
  @Prop() backgroundPressed: string;
  @Prop() foregroundPointerOver: string;
  @Prop() foregroundPressed: string;
  @Prop() borderPointerOver: string;
  @Prop() borderPressed: string;

  setStyles() {
    if (this.background)
      this.el.style.setProperty('--button-background', this.background);
    if (this.backgroundPressed)
      this.el.style.setProperty('--button-background-active', this.backgroundPressed);
    if (this.borderPointerOver)
      this.el.style.setProperty('--button-border', this.borderPointerOver);
    if (this.foreground)
      this.el.style.setProperty('--text-color', this.foreground);
  }

  render() {
    this.setStyles();
    return (
      <button class='button'>
        <slot />
      </button>
    )
  }
}
