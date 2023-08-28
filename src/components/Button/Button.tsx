import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Button.module.css'
import { ButtonProps, Appearance } from './Button.props'

export const Button: FC<ButtonProps> = ({
  children,
  appearance,
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.buttonIcon]: appearance === Appearance.Icon,
        [styles.buttonPrimary]: appearance === Appearance.Primary,
        [styles.buttonSecondary]: appearance === Appearance.Secondary,
        [styles.buttonShop]: appearance === Appearance.Shop,
      })}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}
