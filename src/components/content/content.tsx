import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-content',
  styleUrl: 'content.scss',
  shadow: true
})
export class FluentContentComponent {
  @Element() el!: HTMLElement;

  @Prop() noImage: boolean;
  @Prop() theme: 'light' | 'dark';
  @Prop() backgroundImage: string;

  setCSSVariables() {
    if (this.theme === "dark") {
      this.el.style.setProperty('--color-scheme', 'black');
      this.el.style.setProperty('--text-color', 'white');
      this.el.style.setProperty('--button-background', '#333');
      this.el.style.setProperty('--button-background-active', '#666');
      this.el.style.setProperty('--button-outline', '#858585');

    }
    if (this.theme === "light") {
      this.el.style.setProperty('--color-scheme', 'white');
      this.el.style.setProperty('--text-color', 'black');
      this.el.style.setProperty('--button-background', '#ccc');
      this.el.style.setProperty('--button-background-active', '#999');
      this.el.style.setProperty('--button-outline', '#7a7a7a');
    }
    if (this.backgroundImage) {
      this.el.style.setProperty('--background-image', `url(${this.backgroundImage})`);
    }
  }

  render() {
    this.setCSSVariables();
    return (
      <div class={`content ${this.noImage ? 'solid' : 'image'} ${this.theme}`}>
        <slot />
      </div>
    )
  }
}
