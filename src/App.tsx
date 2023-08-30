import React, { FC } from 'react'

import { Button } from './components/Button/Button'
import { Appearance } from './components/Button/Button.props'
import { CheckBox } from './components/CheckBox/CheckBox'
import { Htag } from './components/Htag/Htag'
import { Input } from './components/Input/Input'
import { P } from './components/P/P'
import { Layout } from './layout/Layout/Layout'

export const App: FC = () => {
  return (
    <Layout>
      <div>
        <Htag tag="h1">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Htag>
        <Htag tag="h2">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Htag>
        <Htag tag="h3">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Htag>
        <Htag tag="h4">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Htag>
        <P size="l" bold>
          Lorem ipsum dolor sit amet consectetur.
        </P>
        <P size="m">Lorem ipsum dolor sit amet consectetur.</P>
        <P size="s">Lorem ipsum dolor sit amet consectetur.</P>
        <P size="xs">Lorem ipsum dolor sit amet consectetur.</P>
        <P size="tinny">Lorem ipsum dolor sit amet consectetur.</P>
        <div>
          <Button appearance={Appearance.Icon}>Icon</Button>
          <Button appearance={Appearance.Primary}>Primary</Button>
          <Button appearance={Appearance.Secondary}>Secondary</Button>
          <Button appearance={Appearance.Shop}>Shop</Button>
        </div>
        <div>
          <Button appearance={Appearance.Icon} disabled>
            Icon
          </Button>
          <Button appearance={Appearance.Primary} disabled>
            Primary
          </Button>
          <Button appearance={Appearance.Secondary} disabled>
            Secondary
          </Button>
          <Button appearance={Appearance.Shop} disabled>
            Shop
          </Button>

          <CheckBox type="radio" />
          <CheckBox type="radio" name="number">
            One
          </CheckBox>
          <CheckBox type="radio" name="number">
            Two
          </CheckBox>
          <CheckBox type="checkbox" />
          <CheckBox type="checkbox">Lorem ipsum dolor sit amet. </CheckBox>
          <Input />
        </div>
      </div>
    </Layout>
  )
}
