import { Story, Meta } from '@storybook/react/types-6-0'
import CheckBox, { CheckBoxProps } from '.'

export default {
  title: 'CheckBox',
  component: CheckBox
} as Meta

export const Default: Story<CheckBoxProps> = (args) => <CheckBox {...args} />
