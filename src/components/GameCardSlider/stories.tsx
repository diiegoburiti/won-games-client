import { Story, Meta } from '@storybook/react/types-6-0'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from '.'

import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '1rem auto 0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
