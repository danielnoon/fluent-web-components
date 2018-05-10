import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-acrylic',
  styleUrl: 'acrylic.scss',
  shadow: true
})
export class FluentAcrylicComponent {
  @Element() el!: HTMLElement;

  @Prop() padding: boolean = false;
  @Prop() tintOpacity: number = 5;
  @Prop() backgroundSource: 'host-backdrop' | 'backdrop' = 'host-backdrop';
  @Prop() tintColor: string;

  render() {
    this.el.style.setProperty('--tint-color', this.tintColor ? this.tintColor : 'var(--color-scheme)');
    return (
      <div
        class={`acrylic o${this.tintOpacity} ${this.backgroundSource}`}>
        <div class={`acrylic-inner ${this.padding ? 'padding' : ''}`}>
          <slot />  
        </div>  
      </div>  
    )
  }
}
