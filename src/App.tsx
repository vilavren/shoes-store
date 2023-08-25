import React, { FC } from 'react'

import { Htag } from './components/Htag/Htag'
import { P } from './components/P/P'

export const App: FC = () => {
  return (
    <div>
      <Htag tag="h1">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
      <Htag tag="h2">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
      <Htag tag="h3">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
      <Htag tag="h4">Lorem ipsum dolor sit amet, consectetur adipisicing.</Htag>
      <P size="l" bold>
        Lorem ipsum dolor sit amet consectetur.
      </P>
      <P size="m">Lorem ipsum dolor sit amet consectetur.</P>
      <P size="s">Lorem ipsum dolor sit amet consectetur.</P>
      <P size="xs">Lorem ipsum dolor sit amet consectetur.</P>
      <P size="tinny">Lorem ipsum dolor sit amet consectetur.</P>
    </div>
  )
}
