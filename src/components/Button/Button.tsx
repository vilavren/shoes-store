import cn from 'classnames'

import { ReactComponent as Icon } from './addIcon.svg'
import styles from './Button.module.css'
import { ButtonProps } from './Button.props'

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.buttonIcon]: appearance === 'icon',
        [styles.buttonPrimary]: appearance === 'primary',
        [styles.buttonSecondary]: appearance === 'secondary',
        [styles.buttonShop]: appearance === 'shop',
      })}
      {...props}
    >
      {appearance === 'icon' && <Icon />}
      {children}
    </button>
  )
}
