import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-button',
  styleUrl: 'button.scss'
})
export class FluentButtonComponent {
  @Element() el!: HTMLElement;

  @Prop() padding: boolean = false;
  @Prop() tintOpacity: number = 5;
  @Prop() backgroundSource: 'host-backdrop' | 'backdrop' = 'host-backdrop';
  @Prop() tintColor: string;

  render() {
    return (
      <button class='button'>
      </button>
    )
  }
}
