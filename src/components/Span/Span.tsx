import cn from 'classnames'
import React from 'react'

import styles from './Span.module.css'
import { SpanProps } from './Span.props'

export const Span = ({
  size,
  bold,
  children,
  className,
  ...props
}: SpanProps): JSX.Element => {
  return (
    <span
      className={cn(className, {
        [styles.bold]: bold === true,
        [styles.l]: size === 'l-24',
        [styles.m]: size === 'm-18',
        [styles.s]: size === 's-16',
        [styles.xs]: size === 'xs-14',
        [styles.tinny]: size === 'tinny-12',
      })}
      {...props}
    >
      {children}
    </span>
  )
}
