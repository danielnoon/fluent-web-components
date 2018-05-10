import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-content',
  styleUrl: 'content.scss'
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
    }
    if (this.theme === "light") {
      this.el.style.setProperty('--color-scheme', 'white');
      this.el.style.setProperty('--text-color', 'black');
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
