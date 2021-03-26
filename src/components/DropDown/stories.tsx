import { Story, Meta } from '@storybook/react/types-6-0'
import DropDown, { DropDownProps } from '.'

export default {
  title: 'DropDown',
  component: DropDown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<DropDownProps> = (args) => <DropDown {...args} />

Default.args = {
  title: 'DropDown title',
  children: 'DropDown children'
}
