import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Button.module.css'
import { ButtonProps, Variant } from './Button.props'

export const Button: FC<ButtonProps> = ({ children, variant }): JSX.Element => {
  switch (variant) {
    case Variant.Disable: {
      return (
        <button className={cn(styles.button, styles.buttonDisable)}>
          {children}
        </button>
      )
    }
    case Variant.DisableSecondary: {
      return (
        <button className={cn(styles.button, styles.buttonDisableSecondary)}>
          {children}
        </button>
      )
    }
    case Variant.Icon: {
      return (
        <button className={cn(styles.button, styles.buttonIcon)}>
          {children}
        </button>
      )
    }
    case Variant.Primary: {
      return (
        <button className={cn(styles.button, styles.buttonPrimary)}>
          {children}
        </button>
      )
    }
    case Variant.Secondary: {
      return (
        <button className={cn(styles.button, styles.buttonSecondary)}>
          {children}
        </button>
      )
    }
    case Variant.Shop: {
      return (
        <button className={cn(styles.button, styles.buttonShop)}>
          {children}
        </button>
      )
    }
    default:
      return <></>
  }
}
