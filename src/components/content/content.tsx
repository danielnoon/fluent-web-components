import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-content',
  styleUrl: 'content.scss'
})
export class FluentContentComponent {
  @Element() el!: HTMLElement;

  @Prop() noImage: boolean;
  @Prop() theme: string;

  setColors() {
    if (this.theme === "dark") {
      this.el.style.setProperty('--color-scheme', 'black');
      this.el.style.setProperty('--text-color', 'white');
    }
    if (this.theme === "light") {
      this.el.style.setProperty('--color-scheme', 'white');
      this.el.style.setProperty('--text-color', 'black');
    }
  }

  render() {
    this.setColors();
    return (
      <div class={`content ${this.noImage ? 'solid' : 'image'} ${this.theme}`}>
        <slot />
      </div>
    )
  }
}
