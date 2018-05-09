import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'fluent-content',
  styleUrl: 'content.scss'
})
export class FluentContentComponent {
  @Prop() noImage: boolean;

  render() {
    return (
      <div class={`content ${this.noImage ? 'solid' : 'image'}`}>
        <slot />
      </div>
    )
  }
}
