import { Story, Meta } from '@storybook/react/types-6-0'
import FormSingUp from '.'

export default {
  title: 'Form/FormSingUp',
  component: FormSingUp
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSingUp />
  </div>
)
