import cn from 'classnames'
import React, { useState } from 'react'

import { Input } from '../Input/Input'

import GlassIcon from './glass.svg'
import styles from './Search.module.css'
import { SearchProps } from './Search.props'

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={onChangeInput}
      />
      <GlassIcon />
    </div>
  )
}
