import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-acrylic',
  styleUrl: 'acrylic.scss'
})
export class FluentAcrylicComponent {
  @Element() el!: HTMLElement;

  @Prop() padding: boolean = false;
  @Prop() tintOpacity: number = 5;
  @Prop() backgroundSource: string = 'host-backdrop';
  @Prop() tintColor: string;

  render() {
    this.el.style.setProperty('--tint-color', this.tintColor ? this.tintColor : 'var(--color-scheme)');
    return (
      <div
        class={`acrylic ${this.padding ? 'padding' : ''} o${this.tintOpacity} ${this.backgroundSource}`}>
        <slot />  
      </div>  
    )
  }
}
