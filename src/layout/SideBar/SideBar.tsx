import cn from 'classnames'
import React from 'react'

import styles from './SideBar.module.css'
import { SideBarProps } from './SideBar.props'

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sideBar)} {...props}>
      SideBar
    </div>
  )
}
