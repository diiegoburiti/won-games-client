import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => {
  return (
    <>
      <div style={{ padding: 10 }}>
        <Radio
          label="lorem"
          labelFor="lorem"
          id="lorem"
          name="name"
          value="lorem"
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="ipsum"
          labelFor="ipsum"
          id="ipsum"
          name="name"
          value="ipsum"
          defaultChecked
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="dolor"
          labelFor="dolor"
          id="dolor"
          name="name"
          value="dolor"
          {...args}
        />
      </div>
    </>
  )
}
