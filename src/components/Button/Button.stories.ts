import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  args:{
    label: 'hola',

  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary : Story = {
    args:{
        mode: 'blue',
        size: 'large'
    }
}