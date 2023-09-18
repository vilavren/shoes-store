import cn from 'classnames'

import styles from './P.module.css'
import { PProps } from './P.props'

export const P = ({
  size,
  bold,
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(className, {
        [styles.bold]: bold === true,
        [styles.l]: size === 'l',
        [styles.m]: size === 'm',
        [styles.s]: size === 's',
        [styles.xs]: size === 'xs',
        [styles.tinny]: size === 'tinny',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
