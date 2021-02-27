import { Story, Meta } from '@storybook/react/types-6-0'
import CheckBox, { CheckBoxProps } from '.'

export default {
  title: 'CheckBox',
  component: CheckBox,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckBoxProps> = (args) => (
  <CheckBox isChecked {...args} />
)
