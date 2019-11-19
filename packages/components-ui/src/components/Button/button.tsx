import { Component, Prop, h } from '@stencil/core'
import cx from 'classnames'

@Component({
  tag: 'cmp-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop({ reflect: true })
  disabled: boolean

  @Prop()
  primary: boolean

  @Prop()
  secondary: boolean

  @Prop()
  size: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small'

  render() {
    return (
      <button
        class={cx('ds-button', {
          'ds-button--primary': this.primary,
          'ds-button--secondary': this.secondary,
          'ds-button--extra-large': this.size === 'extra-large',
          'ds-button--large': this.size === 'large',
          'ds-button--medium': this.size === 'medium',
          'ds-button--small': this.size === 'small',
          'ds-button--extra-small': this.size === 'extra-small'
        })}
        disabled={this.disabled}
      >
        <slot />
      </button>
    )
  }
}
