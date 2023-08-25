import React, { FC } from 'react'

import { Htag } from './components/Htag/Htag'

export const App: FC = () => {
  return (
    <div>
      <Htag tag="h1">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
      <Htag tag="h2">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
      <Htag tag="h3">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
      <Htag tag="h4">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
    </div>
  )
}
