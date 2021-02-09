import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead it´s back',
    subTitle: 'Come see jhon`s adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rd2'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
