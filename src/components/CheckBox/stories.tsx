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

export const Default: Story<CheckBoxProps> = (args) => {
  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <CheckBox name="category" labelFor="lorem" label="lorem" {...args} />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <CheckBox name="category" labelFor="ipsum" label="ipsum" {...args} />
      </div>

      <div>
        <CheckBox name="category" labelFor="dollor" label="dollor" {...args} />
      </div>
    </>
  )
}
