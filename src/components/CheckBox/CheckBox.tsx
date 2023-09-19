import cn from 'classnames'

import styles from './CheckBox.module.css'
import { CheckBoxProps } from './CheckBox.props'

export const CheckBox = ({
  type,
  children,
  className,
  ...props
}: CheckBoxProps): JSX.Element => {
  return (
    <label className={cn(styles.label, className)}>
      <input type={type} {...props} />
      <span
        className={cn(styles.checkmark, {
          [styles.checkbox]: type === 'checkbox',
          [styles.radio]: type === 'radio',
        })}
      ></span>
      {children}
    </label>
  )
}
