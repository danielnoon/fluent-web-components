import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fluent-acrylic',
  styleUrl: 'acrylic.scss',
  shadow: true
})
export class FluentAcrylicComponent {
  @Element() el!: HTMLElement;

  /**
   * If true, add padding to the acrylic object.
   */
  @Prop() padding: boolean = false;

  /**
   * Changes the opacity of the backdrop tint.
   * Higher values make the color more prominent.
   * It does not change blur.
   * Value should be an integer from `1` to `10`.
   */
  @Prop() tintOpacity: number = 5;

  /**
   * Sets the background image source of the acrylic.
   * There are two options:
   * * `"host-backdrop"` sets the backdrop as the background image set
   *    in the `fluent-content` object.
   * * `"backdrop"` sets the backdrop to the entire content behind the acrylic.
   *    * Warning: the technology used to achieve this effect is not supported in many browsers. 
   */
  @Prop() backgroundSource: 'host-backdrop' | 'backdrop' = 'host-backdrop';

  /**
   * Set the tint color of the acrylic.
   * Value should be a css color code (i.e. `'#fff'`, `'white'`, or `'rgb(255,255,255)'`)
   */
  @Prop() tintColor: string;

  render() {
    this.el.style.setProperty('--tint-color', this.tintColor ? this.tintColor : 'var(--color-scheme)');
    return (
      <div
        class={`acrylic o${Math.floor(this.tintOpacity)} ${this.backgroundSource}`}>
        <div class={`acrylic-inner ${this.padding ? 'padding' : ''}`}>
          <slot />  
        </div>  
      </div>  
    )
  }
}
