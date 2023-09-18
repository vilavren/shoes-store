import cn from 'classnames'

import { ReactComponent as Icon } from './addIcon.svg'
import styles from './Button.module.css'
import { ButtonProps, Appearance } from './Button.props'

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.buttonIcon]: appearance === Appearance.Icon,
        [styles.buttonPrimary]: appearance === Appearance.Primary,
        [styles.buttonSecondary]: appearance === Appearance.Secondary,
        [styles.buttonShop]: appearance === Appearance.Shop,
      })}
      {...props}
    >
      {appearance === Appearance.Icon && <Icon />}
      {children}
    </button>
  )
}
