import { FC } from 'react'

import { Slider } from './components/Slider/Slider'
import { Layout } from './layout/Layout/Layout'

export const App: FC = () => {
  return (
    <Layout>
      <Slider />
    </Layout>
  )
}
