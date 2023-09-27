import cn from 'classnames'

import styles from './Htag.module.css'
import { HtagProps } from './Htag.props'

export const Htag = ({
  tag,
  bold,
  children,
  className,
  ...props
}: HtagProps): JSX.Element => {
  switch (tag) {
    case '64px':
      return (
        <h1
          className={cn(styles.h1, className, { [styles.bold]: bold === true })}
          {...props}
        >
          {children}
        </h1>
      )
    case '48px':
      return (
        <h2
          className={cn(styles.h2, className, { [styles.bold]: bold === true })}
          {...props}
        >
          {children}
        </h2>
      )
    case '32px':
      return (
        <h3
          className={cn(styles.h3, className, { [styles.bold]: bold === true })}
          {...props}
        >
          {children}
        </h3>
      )
    case '28px':
      return (
        <h4
          className={cn(styles.h4, className, { [styles.bold]: bold === true })}
          {...props}
        >
          {children}
        </h4>
      )
    default:
      return <></>
  }
}
